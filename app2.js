const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('Content \n')
      res.write('More content \n')
      res.write('Hello World')    
      res.write('<table> ')
      res.write('<tr> <th>Location</th> <th>Hours recommended to Stay</th> <th>Cost of entry</th> </tr>')
      res.write('<tr> <td>WWI Museum</td> <td>2-3 hours</td> <td>$18.00</td> </tr>')
      res.write('<tr> <td>Level 1 Game Shop</td> <td>1-2 hours</td> <td>Free Admittance (but buy something)</td> </tr>')
      res.write('<tr> <td>St. Louis Arch</td> <td>1-2 hours</td> <td>$12.00-$16.00</td> </tr>')
      res.write('<tr> <td>Glacier National Park</td> <td>5 hours</td> <td>$20.00</td> </tr>')
      res.write('</table>')
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})