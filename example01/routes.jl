using Genie.Router

route("/") do
  serve_static_file("welcome.html")
end

route("/sample") do
  serve_static_file("sample.html")
end
route("/table") do
  serve_static_file("table.html")
end

route("/hello") do
  str_out = "Hello World!<br />"
  str_out *= "<blockquote>"
  str_out *= "こんにちは。<br />"
  str_out *= "</blockquote>"
  str_out *= "Dec/31/2021<br />"
end

route("/morning") do
  str_out = "Good Morning!<br />"
  str_out *= "<blockquote>"
  str_out *= "おはようございます。<br />"
  str_out *= "</blockquote>"
  str_out *= "Dec/31/2021<br />"
end

route("/evening") do
  str_out = "Good Evening!<br />"
  str_out *= "<blockquote>"
  str_out *= "今晩は。<br />"
  str_out *= "</blockquote>"
  str_out *= "Dec/31/2021<br />"
end
route("/hi") do
  name = params(:name, "Anon")
  # :name クエリパラメータ

  "Hello $name"
end
using Genie, Genie.Renderer.Html, Genie.Requests

form = """
<form action="/test" method="POST" enctype="multipart/form-data">
  <input type="text" name="name" value="" placeholder="What's your name?" />
  <input type="submit" value="Greet" />
</form>
"""

route("/test") do
  html(form)
end

route("/test", method=POST) do
  "Hello $(postpayload(:name, "Anon"))"
end

