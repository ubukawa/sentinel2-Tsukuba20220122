'use strict';
/* global mapboxgl */

var before = new mapboxgl.Map({
  container: 'before',
  style: 'https://ubukawa.github.io/sentinel2-Tsukuba20170118/maps/style.json'
});

var after = new mapboxgl.Map({
  container: 'after',
  style: 'https://ubukawa.github.io/sentinel2-Tsukuba20220122/maps/style.json'
});

// Use either of these patterns to select a container for the compare widget
var wrapperSelector = '#wrapper';
var wrapperElement = document.body.querySelectorAll('#wrapper')[0];

// available options
var options = {
  mousemove: true,
  orientation: 'horizontal'
}

window.compare = new mapboxgl.Compare(
  before,
  after, 
  wrapperSelector
  // options
);

var closeButton = document.getElementById('close-button');

closeButton.addEventListener('click', function(e) {
  after.getContainer().style.display = 'none';
  window.compare.remove();
  after.remove();
});