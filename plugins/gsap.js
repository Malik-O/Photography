import Vue from "vue";
import { gsap } from "gsap";

Object.defineProperty(Vue.prototype, "$gsap", { value: gsap });
