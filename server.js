const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url == '/')
    res.end('Hola món!\n');
});

server.listen(3000);






































                                                                                [ Read 16 lines ]
^G Help          ^O Write Out     ^F Where Is      ^K Cut           ^T Execute       ^C Location      M-U Undo         M-A Set Mark     M-] To Bracket   M-B Previous
^X Exit          ^R Read File     ^\ Replace       ^U Paste         ^J Justify       ^/ Go To Line    M-E Redo         M-6 Copy         ^B Where Was     M-F Next
