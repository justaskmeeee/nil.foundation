import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';
import {bg, font} from './file'



const handleUpdate = async (event) => {  
  const { result } = event;
  const fontfile = path.join(__dirname, 'font.ttf')
  if (result.title && result.title !== result.generated_share_text) {
    const isFontExists = await fs.access(fontfile).then(() => true).catch(() => false)
    if (!isFontExists) {
      await fs.writeFile(fontfile, font)
    }


    const fontSize = result.title.length > 120 ? 87 : 66
    const text = `<span color="#C8C8C8" line-height="0.95" letter-spacing="-1900">${result.title}</span>`
    const spacing = 0
    const textImage = await sharp({
        text: {
            text,
            fontfile: 'font.ttf',
            width: 1078,
            align: 'left',
            dpi: 72*fontSize/12,
            rgba: true,
            spacing,
        },
    })
    .metadata()
    const sharpBg = await sharp(bg);
    const metaBg = await sharpBg.metadata()
    const genImage = await sharpBg
    .composite([
      {
        input: {
          text: {
            text,
            fontfile,
            width: 1078,
            align: 'left',
            // @ts-ignore
            dpi: 72*fontSize/12,
            rgba: true,
            spacing,
          },
        },
        gravity: 'southeast',
        top: metaBg.height - textImage.height - 132,
        left: 62,
      }
    ]).toFormat('jpeg').toBuffer();

    const hash = Math.random().toString(36).substring(7);
    const imageFile = path.join(__dirname, `${hash}.jpg`)

    await fs.writeFile(imageFile, genImage)

    // Save the image to a file
    const [uploadedFile] = await strapi.plugins.upload.services.upload.upload(
      {
        data: genImage,
        files: {
          path: imageFile,
          name: `${hash}.jpg`,
          type: 'image/jpeg',
          size: genImage.length,
        },
      }
    );
    await strapi.entityService.update(
      'api::blog.blog',
      result.id,
      {
        data: {
          generated_share_image: uploadedFile.id,
          generated_share_text: result.title,
        }
      },
    )

    await fs.unlink(imageFile)

  }
};
export default {
  afterCreate: handleUpdate,
  afterUpdate: handleUpdate,
};