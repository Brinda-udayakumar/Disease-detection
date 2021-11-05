// import * as tf from '@tensorflow/tfjs';
var canvas, context;
function clearCanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    var w = canvas.width;
    canvas.width = 1;
    canvas.width = w;
}
function scaleImage(image){
    let tensor = tf.browser.fromPixels(image)
        .resizeBilinear([256,256])
        // .resizeNearestNeighbor([512, 512,3])
        // .mean(2)
        // .expandDims(2)
        .expandDims()
        .toFloat();
    return tensor.div(255.0);
}
document.querySelector('#img').onchange = function loadImage(){
    clearCanvas();
    var file = document.scan[0].files[0], url = URL.createObjectURL(file), img = new Image();
    // window.URL = window.URL || window.webkitURL;
    img = new Image();
    img.onload = function () {                    // handle async image loading
        URL.revokeObjectURL(this.src);             // free memory held by Object URL
        document.getElementById('brainImg').getContext("2d").drawImage(this, 0, 0);  // draw image onto canvas (lazy method™)
    };

    img.src = url;
}
async function genReport(){
    // loadImage();
    const model = await tf.loadLayersModel('Model1/model.json');
    
    let tensor = scaleImage(context.getImageData(0,0,256,256));
    let predictions = await model.predict(tensor).data();
    console.log(predictions);
    let results = Array.from(predictions);
    if (results[0] > results[1]){
        document.getElementById('result').innerHTML = "RESULT : NEGATIVE (We are happy to inform you that you are healthy)"
    }
    else{
        document.getElementById('result').innerHTML = "RESULT : POSITIVE (Brain tumor is detected! Take care)"
    }
}