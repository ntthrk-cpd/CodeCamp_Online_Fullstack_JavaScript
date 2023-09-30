let ask = (question, yes, no) => (confirm(question))? yes():no();

ask (
    "Do you agree?",
    function() { alert("You areed."); },
    function() { alert("You cancled the execution."); }
);
