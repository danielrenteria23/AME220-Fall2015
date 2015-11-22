var difference = 0;
var backgroundColor = "white";
var needleType = "solid";
var TZ = "currentLocation";
var background = "sky";
function clock()
{
    TZ == "currentLocation";
    // Calculate angle
    var d, h, m, s;
    d = new Date;
    
    h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
    m = 6 * d.getMinutes();
    s = 6 * d.getSeconds();
    
    // Move hands
    setAttr('h-hand', h);
    setAttr('m-hand', m);
    setAttr('s-hand', s);
    setAttr('s-tail', s+180);
    
    // Display time
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    
    if (h >=12)
    {
        setText('suffix', 'PM');
    }
    else
    {
        setText('suffix', 'AM');
    }
    
    if (h != 12)
    {
        h %= 12;
    }
    
    setText('hr', h);
    setText('min', m);
    setText('sec', s);
    
    if (TZ == "currentLocation")
    {
        setTimeout(clock, 1000);
    }
};

function NYClock()
{
    TZ = "newYork";

    var d, h, m, s;
    d = new Date;
    
    h = 30 * ((d.getHours() + 2 % 12) + d.getMinutes() / 60);
    m = 6 * d.getMinutes();
    s = 6 * d.getSeconds();
    
    setAttr('h-hand', h);
    setAttr('m-hand', m);
    setAttr('s-hand', s);
    setAttr('s-tail', s+180);
    
    h = d.getHours() + 2;
    m = d.getMinutes();
    s = d.getSeconds();
    
    if (h >=12)
    {
        setText('suffix', 'PM');
    }
    else
    {
        setText('suffix', 'AM');
    }
    
    if (h != 12)
    {
        h %= 12;
    }
    
    setText('hr', h);
    setText('min', m);
    setText('sec', s);
    
    if (TZ == "newYork")
    {
        setTimeout(NYClock, 1000);
    }
};

function parisClock()
{
    TZ = "paris";
    
    var d, h, m, s;
    d = new Date;
    
    h = 30 * ((d.getHours() + 8 % 12) + d.getMinutes() / 60);
    m = 6 * d.getMinutes();
    s = 6 * d.getSeconds();
    
    setAttr('h-hand', h);
    setAttr('m-hand', m);
    setAttr('s-hand', s);
    setAttr('s-tail', s+180);
    
    h = d.getHours() + 8;
    m = d.getMinutes();
    s = d.getSeconds();
    
    if (h >=12)
    {
        setText('suffix', 'PM');
    }
    else
    {
        setText('suffix', 'AM');
    }
    
    if (h != 12)
    {
        h %= 12;
    }
    
    setText('hr', h);
    setText('min', m);
    setText('sec', s);
    
    if (TZ == "paris")
    {
        setTimeout(parisClock, 1000);
    }
};

function setAttr(id, val)
{
    var v = 'rotate(' + val + ', 150, 150)';
    document.getElementById(id).setAttribute('transform', v);
};

function toggleFace()
{
    if (backgroundColor == "white")
    {
        backgroundColor = "green";
        document.getElementById("clock-face").setAttribute("style", "fill: green;");
    }
    
    else
    {
        if (backgroundColor == "green")
        {
            backgroundColor = "blue";
            document.getElementById("clock-face").setAttribute("style", "fill: blue;");
        }
        else if (backgroundColor == "blue")
        {
            backgroundColor = "white";
            document.getElementById("clock-face").setAttribute("style", "fill: white;");
        }
    }
};

function toggleNeedle()
{
    if (needleType == "solid")
    {
        needleType = "dotted";
        document.getElementById("h-hand").setAttribute("style", "stroke-dasharray: 3,4;");
        document.getElementById("m-hand").setAttribute("style", "stroke-dasharray: 3,4;");
        document.getElementById("s-hand").setAttribute("style", "stroke-dasharray: 3,4;");
        document.getElementById("s-tail").setAttribute("style", "stroke-dasharray: 3,4;");
    }
    else
    {
        if (needleType == "dotted")
        {
            needleType = "dashed";
            document.getElementById("h-hand").setAttribute("style", "stroke-dasharray: 10,10;");
            document.getElementById("m-hand").setAttribute("style", "stroke-dasharray: 10,10;");
            document.getElementById("s-hand").setAttribute("style", "stroke-dasharray: 10,10;");
            document.getElementById("s-tail").setAttribute("style", "stroke-dasharray: 10,10;");
        }
        else if (needleType == "dashed")
        {
            needleType = "solid";
            document.getElementById("h-hand").setAttribute("style", "stroke-dasharray: 0,0;");
            document.getElementById("m-hand").setAttribute("style", "stroke-dasharray: 0,0;");
            document.getElementById("s-hand").setAttribute("style", "stroke-dasharray: 0,0;");
            document.getElementById("s-tail").setAttribute("style", "stroke-dasharray: 0,0;");
        }
    }
}

function toggleBack()
{
    if (background == "sky")
    {
        background = "black";
        document.getElementById(".everything").setAttribute("background-image", "url(" + "'black.png'" + ");");
    }
}

function setText(id, val)
{
    if (val < 10)
    {
        val = '0' + val;
    }
    document.getElementById(id).innerHTML = val;
};