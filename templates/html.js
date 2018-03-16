module.exports = math => `<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>MathQuill in JSDOM</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="node_modules/mathquill/build/mathquill.js"></script>
    <script>
        const MQ = MathQuill.getInterface(2);
    </script>
</head>

<body>
    <p><span id="math">${math}</span><p>

    <script>
        const el = document.getElementById('math');
        MQ.StaticMath(el);
        console.log(el.outerHTML);
    </script>
</body>

</html>`;
