/*
var editor2;
NationalInstruments.Vireo.core.print = function(text){ editor2.insert(text + "\n") };
var v_state = document.getElementById("in_state")
var v_address = document.getElementById("in_address")
var v_link = document.getElementById("link")

// Define global Vireo functions
// might use embind instead
var esh = NationalInstruments.Vireo;
esh.repeat = false;
esh.pause = false;

var theCanvas = document.getElementById("theCanvas");
var ctx = theCanvas.getContext("2d");
var editor1 = ace.edit("VireoSource");

esh.loadVia(editor1.getValue());
esh.execCount = 0
esh.startTime = Date.now();
v_state.value = "started";
setTimeout(VireoRunProc,0);
setTimeout(UpdateFrontPanel,0);
}
function VRunRun()
{
esh.repeat = !esh.repeat;
VRun();
}
function VPause()
{
esh.pause = !esh.pause;
if (!esh.pause) {
setTimeout(VireoRunProc, 0);
setTimeout(UpdateFrontPanel, 0);
}
}

$("#VPause").click(function(){VPause();} );
$("#VRun").click(function(){VRun();} );
$("#VRunRun").click(function(){VRunRun();} );
$("#PiSample").click(function(){LoadSample("Pi.via");} );
$("#TicTockSample").click(function(){LoadSample("TicTock.via");} );
$("#SineWaveSample").click(function(){LoadSample("SineWave.via");} );
$("#MandelbrotSample").click(function(){LoadSample("Mandelbrot.via");} );
$("#ParallelSample").click(function(){LoadSample("Parallel.via");} );


$("#fp1").on('change', function(){LVDoubleControl("#fp1", "_v7_Alpha");} );
$("#fp2").on('change', function(){LVDoubleControl("#fp2", "_v5_NoiseLevel");} );
$("#fp3").on('change', function(){LVDoubleControl("#fp3", "_v4_Amplitude");} );
$("#fp4").on('change', function(){LVDoubleControl("#fp4", "_v3_DeltaT");} );
$("#fp5").on('change', function(){LVDoubleControl("#fp5", "_v6_milliseconds%20to%20wait");} );


// BuildFPTab();
// function  BuildFPTab()
// {
// $("#FpTable").html.insert(' <input type="range" id="fpValue1" step= 0.01 min=0.0 max=1.0 value=0.5 style="width:500px;padding:9px"/>' +
//     '<input type="range" id="fpValue2" step= 0.01 min=0.0 max=50.0 value=5.0 style="width:500px;padding:9px"/>');
// }


function LVDoubleControl(v, varName)
{
controlValue = $(v).val();
esh.writeDouble("_VireoScope3%2Evi", varName, controlValue);
v_state.value = $(v).val();
}


$("#Mandelbrot").bind(function(e){ alert("MandelBrot"); e.preventDefault(); });

function LVLink()
{
var the_url = "http://" + v_address.value +  ":6340/ViaCode";
// LabVIEW does a long poll response
LVLink.Count += 1;
v_link.value = "ping " + LVLink.Count;
$.ajax({
type: "GET",
url: the_url,
dataType: "jsonp",
timout:10000,
error: function(x,t,m) {
setTimeout(LVLink, 100);
}
})
}
LVLink.Count = 0;

function JSONP_ViaLoadCode(text, name)
{
// If we get a time-out, then retry for few time then give up.

v_link.value = "load";

if ( typeof JSONP_ViaLoadCode.counter == 'undefined' ) {
JSONP_ViaLoadCode.counter = 0;
} else {
JSONP_ViaLoadCode.counter++;
}

v_state.value = "got new code" + JSONP_ViaLoadCode.counter;
if (text != "") {
editor1.setValue(text)
editor1.gotoLine(0,0,false);
}
setTimeout(LVLink, 100);
}

function JSONP_ViaRun(name)
{
v_link.value = "run";
editor2.setValue("");
v_state.value = "runing code";
VRun();
setTimeout(LVLink, 100);
}

oldFrameCount = 0;
function UpdateFrontPanel()
{
if (esh.pause)
return;
// Estimate of data frame count
newFrameCount = esh.readDouble("_VireoScope3%2Evi", "_v9_FrameCount");
$("#frameCounter").val((newFrameCount - oldFrameCount)*2);
oldFrameCount = newFrameCount;
setTimeout(UpdateFrontPanel, 500);
}

function VireoRunProc()
{
// Run a chunk of code. if there is more pending
// Then restart soon, else restart when it makes sense.
if (esh.pause)
return;

var x = esh.executeSlices(1000);
esh.execCount += 1;
if (x>0) {
// periodically sleep for 50 ms or so.
setTimeout(VireoRunProc, 0);
} else {
v_state.value = "done " + esh.execCount + " time " + (Date.now() - esh.startTime);
if (esh.repeat) {
setTimeout(VRun, 100);
}
}
}
function LoadSample(sampleName)
{
$.get(sampleName, function(data) { editor1.setValue(data); editor1.gotoLine(0,0,false); }, "text")  .fail(function() { alert( "error" );})
}
*/
