import http from "http";

const server = http.createServer((req, res) => {
  
    res.writeHead(200, "Good", { "Content-Type": "text/html" });
   res.write("<h1> Heyy Dudee  hey hey 🙌</h1>")
  

});

server.listen(8005, () => console.log("Server Up!"));