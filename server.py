import tornado.httpserver
import tornado.ioloop
import tornado.web
import os
 
class IndexHandler(tornado.web.RequestHandler):
    """ Creates the web server
    """
    @tornado.web.asynchronous
    def get(self):
        self.render('web/index.html')


class Application(tornado.web.Application):
    def __init__(self):
        handlers = [
            (r'/', IndexHandler),
        ]
        settings = {
            "debug": True,
            "static_path": os.path.join(os.path.dirname(__file__), "web")
        }
        tornado.web.Application.__init__(self, handlers, **settings)


application = Application()
""" Defines the server parameters
"""


print ("Starting server.")
http_server = tornado.httpserver.HTTPServer(application)
http_server.listen(8888)

# starts the main IO loop
main_loop = tornado.ioloop.IOLoop.instance()
main_loop.start()
