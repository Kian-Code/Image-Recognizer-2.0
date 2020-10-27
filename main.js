Webcam.set({
    width:310,
    height:300,
    image_format: 'png',
    png_quality:90,
    constraints:{
        facingMode: "environment"
    }
});
 Camera = document.getElementById("Camera");
 Webcam.attach('#Camera');
 

 function Take_Snapshot()
 {
Webcam.snap(function(data_url){
document.getElementById("Result").innerHTML = '<img src = "'+data_url+'" id = "Captured_img">';
});
}

console.log("ml5 version:" , ml5.version);
Classifier = ml5.imageClassifier('MobileNet' , Model_Loaded);

function Model_Loaded()
{
    console.log("Model is loaded")
}

function Check()
{
    Img = document.getElementById("Captured_img");
    Classifier.classify(Img , Got_Result);
}

function Got_Result(error , results)
{
if (error) 
{
    console.error(error);
} else {
    console.log(results);
    document.getElementById("Object_Name").innerHTML = results[0].label;
}
}