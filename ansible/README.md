# Intro

It's ansible for deploy:

* site (next.js instance)
* admin (strapi based)

Here is also docker file that could be build to run ansible if you don't have it on machine.

Example how to run playbook with docker:

```
docker build . -t ansible
docker run -v `pwd`:/ansible:ro ansible ansible-playbook --extra-vars "site_user=myname" --private-key ~/.ssh/nil -i host, playbook.yml
```


scp -r -i ~/.ssh/nil ./nil.foundation nmendiaev@18.170.7.91:/home/nmendiaev/app