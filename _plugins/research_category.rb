module ResearchCategory
  class CategoryPageGenerator < Jekyll::Generator
    safe true

    def generate(site)
      topics = Set.new

      
      site.posts.docs.each do |post|
        if post.data['tag'] == 'research'
          post.data['topics'].each do |topic|
            topics.add(topic)
          end
        end
      end
      site.data['research'] = topics.to_a

      topics = topics.to_a
      
      topics.each do |topic|
        posts = site.posts.docs.select do |post|
           post.data['tag'] == 'research' && post.data['topics'].include?(topic)
        end
        site.pages << CategoryPage.new(site, topic, posts)
      end
    end
  end

  # Subclass of `Jekyll::Page` with custom method definitions.
  class CategoryPage < Jekyll::Page
    def initialize(site, topic, posts)
      @site = site             # the current site instance.
      @base = site.source      # path to the source directory.
      @dir  = topic         # the directory the page will reside in.

      # All pages have the same filename, so define attributes straight away.
      @basename = 'index'      # filename without the extension.
      @ext      = '.html'      # the extension.
      @name     = 'index.html' # basically @basename + @ext.

      # Initialize data hash with a key pointing to all posts under current category.
      # This allows accessing the list in a template via `page.linked_docs`.
      @data = {
        'topic' => topic
      }

      data.default_proc = proc do |_, key|
        site.frontmatter_defaults.find(relative_path, :categories, key)
      end
    end

    # Placeholders that are used in constructing page URL.
    def url_placeholders
      {
        :category   => @dir,
        :basename   => basename,
        :output_ext => output_ext,
      }
    end
  end
end