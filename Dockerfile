FROM httpd:2.4
COPY ./dist/awesomenauts-drafter/ /usr/local/apache2/htdocs/
COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf
