FROM httpd:2.4
COPY ./dist/awesomenauts-drafter/ /user/local/apache2/htdocs/
COPY ./httpd.conf /user/local/apache2/conf/httpd.conf