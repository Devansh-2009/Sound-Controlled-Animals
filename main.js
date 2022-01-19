function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/rye7l-j3Z/', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}