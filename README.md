# ember-aframe-shim

[![Greenkeeper badge](https://badges.greenkeeper.io/ember-vr/ember-aframe-shim.svg)](https://greenkeeper.io/)
[![npm version](https://badge.fury.io/js/ember-aframe-shim.svg)](https://badge.fury.io/js/ember-aframe-shim)
[![Build Status](https://travis-ci.org/ember-vr/ember-aframe-shim.svg?branch=master)](https://travis-ci.org/ember-vr/ember-aframe-shim)
![Ember Version](https://embadge.io/v1/badge.svg?start=2.12.0)

An Ember.js shim for [A-Frame](https://aframe.io).

## Installation

`ember install ember-aframe-shim`

## Usage

```js
import Ember from 'ember';
import AFrame from 'aframe'

export default Ember.Component.extend({
  version: AFrame.version
});
```
