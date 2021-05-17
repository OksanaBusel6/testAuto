/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/main.js":
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/form */ "./app/js/modules/form.js");
/* harmony import */ var _modules_inputChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/inputChange */ "./app/js/modules/inputChange.js");
/* harmony import */ var _modules_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/db */ "./app/js/modules/db.js");

 //import { dataGet } from './modules/services';


document.addEventListener('DOMContentLoaded', () => {
  /* Without database */
  Object(_modules_form__WEBPACK_IMPORTED_MODULE_0__["form"])('.form', '.login', '.app', _modules_db__WEBPACK_IMPORTED_MODULE_2__["users"]);
  Object(_modules_inputChange__WEBPACK_IMPORTED_MODULE_1__["inputChange"])(_modules_db__WEBPACK_IMPORTED_MODULE_2__["users"]);
  /* --------With database--------- */

  /* dataGet('http://localhost:3000/user')
  .then(data =>{
    form('.form', '.login', '.app', data);
    inputChange(data);
  }); */
});

/***/ }),

/***/ "./app/js/modules/checkInput.js":
/*!**************************************!*\
  !*** ./app/js/modules/checkInput.js ***!
  \**************************************/
/*! exports provided: checkInput, messageError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInput", function() { return checkInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageError", function() { return messageError; });
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator */ "./app/js/modules/validator.js");


const checkInput = ({
  input,
  leng,
  values,
  match = false
}) => {
  const isValid = Object(_validator__WEBPACK_IMPORTED_MODULE_0__["validator"])({
    text: input.value,
    leng,
    values,
    match
  }),
        $inputBtn = input.closest('.form__input-box').querySelector('.form__input-btn'),
        $err = input.closest('.form__input-box').querySelector('.error');
  $inputBtn.style.display = 'none';

  if ($err) {
    $err.remove();
  }

  if (!isValid.valid) {
    $inputBtn.style.display = 'inline-block';
    const $errBlock = document.createElement('div');
    $errBlock.classList.add('error');
    $errBlock.textContent = messageError[isValid.error];
    input.after($errBlock);
  }

  return isValid;
};

const messageError = {
  length: 'חייב להכיל לפחות 3 תווים',
  match: 'שם זה כבר נלקח'
};


/***/ }),

/***/ "./app/js/modules/createPost.js":
/*!**************************************!*\
  !*** ./app/js/modules/createPost.js ***!
  \**************************************/
/*! exports provided: createPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPost", function() { return createPost; });
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg */ "./app/js/modules/svg.js");


const createPost = (posts, prevSelector) => {
  const $prevEl = document.querySelector(prevSelector);
  posts.forEach(post => {
    const $item = document.createElement('div');
    const {
      automatic
    } = post;
    let classImgBox = '';

    if (automatic === 'true') {
      classImgBox = 'app-item__box-img--active';
    }

    $item.classList.add('app-item');
    $item.innerHTML = `
          <div class="app-item__contacts">
            <div class="app-item__contacts-info">
              <a class="app-item__link" href="#">
                <div class="app-item__link-img">
                 ${_svg__WEBPACK_IMPORTED_MODULE_0__["mail"]}
                </div>
                <span>תחילש
                  העצהה</span>
              </a>
              <a class="app-item__link" href="#">
                <div class="app-item__link-img">
                  ${_svg__WEBPACK_IMPORTED_MODULE_0__["pen"]}
                </div>
                <span>תכירע
                  העצהה</span>
              </a>
            </div>
            <img class="app-item__contact-img" src="images/icons/auto.svg" alt="auto icon">
          </div>
          <div class="app-item__content">
            <div class="app-item__text app-item__box-img ${classImgBox}">
              <span class="app-item__text-img">(חוקלל החלשנ)</span>
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 11.5L10 18L22 2" stroke="#009C41" stroke-width="4" stroke-linecap="round"
                stroke-linejoin="round" />
              </svg>

            </div>
            <div class="app-item__text">
              <span class="app-item__text-title">הסילופ</span>
              <span>${post.bodyNumber}</span>
            </div>
            <div class="app-item__text">
              <span class="app-item__text-title">חוטיב תליחת</span>
              <span>${post.publicationDate}</span>
            </div>
            <div class="app-item__text">
              <span class="app-item__text-title">העצה תחיתפ</span>
              <span>${post.issueDate}</span>
            </div>
            <div class="app-item__text">
              <span class="app-item__text-title">תוהז תדועת</span>
              <span>${post.odometerNumber}</span>
            </div>
            <div class="app-item__text">
              <span class="app-item__text-title">יושיר רפסמ</span>
              <span>${post.motor}</span>
            </div>
            <div class="app-item__text">
              <span class="app-item__text-title">חטובמ םש</span>
              <span>${post.muffler}</span>
            </div>
            <div class="app-item__text">
              <span class="app-item__text-title">ביטקלוק</span>
              <span>${post.brand}</span>
            </div>
            <div class="app-item__text">
              ${post.bachar}
            </div>
        </div>
    `;
    $prevEl.after($item);
    classImgBox = '';
  });
};



/***/ }),

/***/ "./app/js/modules/db.js":
/*!******************************!*\
  !*** ./app/js/modules/db.js ***!
  \******************************/
/*! exports provided: posts, users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posts", function() { return posts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
const posts = [{
  "automatic": "true",
  "bodyNumber": "123456789012",
  "publicationDate": "04.04.2020",
  "issueDate": "12.10.2019",
  "odometerNumber": "039894872",
  "motor": "12-345-67",
  "muffler": "םהרבא ןב קחצי",
  "brand": "רצומה םש",
  "bachar": "בכר"
}, {
  "automatic": "false",
  "bodyNumber": "123456789012",
  "publicationDate": "04.04.2020",
  "issueDate": "12.10.2019",
  "odometerNumber": "039894872",
  "motor": "12-345-67",
  "muffler": "םהרבא ןב קחצי",
  "brand": "רצומה םש",
  "bachar": "בכר"
}, {
  "automatic": "false",
  "bodyNumber": "123456789012",
  "publicationDate": "04.04.2020",
  "issueDate": "12.10.2019",
  "odometerNumber": "039894872",
  "motor": "12-345-67",
  "muffler": "םהרבא ןב קחצי",
  "brand": "רצומה םש",
  "bachar": "בכר"
}, {
  "automatic": "true",
  "bodyNumber": "123456789012",
  "publicationDate": "04.04.2020",
  "issueDate": "12.10.2019",
  "odometerNumber": "039894872",
  "motor": "12-345-67",
  "muffler": "םהרבא ןב קחצי",
  "brand": "רצומה םש",
  "bachar": "בכר"
}, {
  "automatic": "true",
  "bodyNumber": "123456789012",
  "publicationDate": "04.04.2020",
  "issueDate": "12.10.2019",
  "odometerNumber": "039894872",
  "motor": "12-345-67",
  "muffler": "םהרבא ןב קחצי",
  "brand": "רצומה םש",
  "bachar": "בכר"
}, {
  "automatic": "true",
  "bodyNumber": "123456789012",
  "publicationDate": "04.04.2020",
  "issueDate": "12.10.2019",
  "odometerNumber": "039894872",
  "motor": "12-345-67",
  "muffler": "םהרבא ןב קחצי",
  "brand": "רצומה םש",
  "bachar": "בכר"
}, {
  "automatic": "true",
  "bodyNumber": "123456789012",
  "publicationDate": "04.04.2020",
  "issueDate": "12.10.2019",
  "odometerNumber": "039894872",
  "motor": "12-345-67",
  "muffler": "םהרבא ןב קחצי",
  "brand": "רצומה םש",
  "bachar": "בכר"
}, {
  "automatic": "false",
  "bodyNumber": "123456789012",
  "publicationDate": "04.04.2020",
  "issueDate": "12.10.2019",
  "odometerNumber": "039894872",
  "motor": "12-345-67",
  "muffler": "םהרבא ןב קחצי",
  "brand": "רצומה םש",
  "bachar": "בכר"
}, {
  "automatic": "true",
  "bodyNumber": "123456789012",
  "publicationDate": "04.04.2020",
  "issueDate": "12.10.2019",
  "odometerNumber": "039894872",
  "motor": "12-345-67",
  "muffler": "םהרבא ןב קחצי",
  "brand": "רצומה םש",
  "bachar": "בכר"
}, {
  "automatic": "true",
  "bodyNumber": "123456789012",
  "publicationDate": "04.04.2020",
  "issueDate": "12.10.2019",
  "odometerNumber": "039894872",
  "motor": "12-345-67",
  "muffler": "םהרבא ןב קחצי",
  "brand": "רצומה םש",
  "bachar": "בכר"
}];
const users = [{
  "name": "user",
  "password": "123",
  "id": 1
}];

/***/ }),

/***/ "./app/js/modules/form.js":
/*!********************************!*\
  !*** ./app/js/modules/form.js ***!
  \********************************/
/*! exports provided: form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "form", function() { return form; });
/* harmony import */ var _createPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPost */ "./app/js/modules/createPost.js");
/* harmony import */ var _checkInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkInput */ "./app/js/modules/checkInput.js");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ "./app/js/modules/db.js");
//import {dataPost, dataGet} from './services';



function form(selector, parentSelector, nextSelector, values) {
  const $form = document.querySelector(selector),
        $parentState = document.querySelector(parentSelector),
        $nextState = document.querySelector(nextSelector),
        $inputName = $form.querySelector('input[name="name"]'),
        $inputPassword = $form.querySelector('input[name="password"]');
  $form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;
    const checkName = Object(_checkInput__WEBPACK_IMPORTED_MODULE_1__["checkInput"])({
      input: $inputName,
      leng: 3,
      values,
      match: true
    }),
          checkPassword = Object(_checkInput__WEBPACK_IMPORTED_MODULE_1__["checkInput"])({
      input: $inputPassword,
      leng: 3
    });
    isValid = isValid && checkName.valid && checkPassword.valid;

    if (isValid) {
      /* Without database */
      $parentState.style.display = 'none';
      $nextState.style.display = 'block';
      Object(_createPost__WEBPACK_IMPORTED_MODULE_0__["createPost"])(_db__WEBPACK_IMPORTED_MODULE_2__["posts"], '.app__items-top');
      /* ------------------------With database--------------------------------------- */
      //const data = JSON.stringify(Object.fromEntries(new FormData($form).entries()));

      /* dataPost('http://localhost:3000/user', data)
      .then(() => {
        dataGet('http://localhost:3000/posts')
          .then(data => {
            $parentState.style.display = 'none';
            $nextState.style.display = 'block';
            createPost(data, '.app__items-top');
          });
      })
      .catch(() => {
        const $errBlock = document.createElement('div');
        $errBlock.classList.add('error');
        $errBlock.textContent = 'Sorry, something went wrong...';
        $form.after($errBlock);
      })
      .finally(() => {
        $form.reset();
      }); */
    }
  });
}

/***/ }),

/***/ "./app/js/modules/inputChange.js":
/*!***************************************!*\
  !*** ./app/js/modules/inputChange.js ***!
  \***************************************/
/*! exports provided: inputChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputChange", function() { return inputChange; });
/* harmony import */ var _checkInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkInput */ "./app/js/modules/checkInput.js");


const inputChange = values => {
  const $inputName = document.querySelector('input[name="name"]'),
        $inputPassword = document.querySelector('input[name=password]');
  [$inputName, $inputPassword].forEach(input => {
    input.addEventListener('change', () => {
      let data = {
        input,
        leng: 3
      };

      if (input === $inputName) {
        data.values = values;
        data.match = true;
      }

      Object(_checkInput__WEBPACK_IMPORTED_MODULE_0__["checkInput"])(data);
    });
  });
};



/***/ }),

/***/ "./app/js/modules/svg.js":
/*!*******************************!*\
  !*** ./app/js/modules/svg.js ***!
  \*******************************/
/*! exports provided: mail, pen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mail", function() { return mail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pen", function() { return pen; });
const mail = `
   <svg width="30" height="17" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M29.9999 11.6372C29.6784 12.0662 29.357 12.5489 28.982 12.9243C27.857 14.0505 26.732 15.1767 25.607 16.3028C25.1784 16.7319 24.7499 17.1609 24.107 16.8927C23.5713 16.6782 23.5713 16.0883 23.5713 15.5521C23.5713 15.4448 23.5713 15.3912 23.5177 15.0694C22.8213 16.4101 21.6963 16.4637 20.5177 16.4637C14.5713 16.4637 8.62486 16.4101 2.67843 16.4637C1.33915 16.4637 0.428432 15.9811 -0.0537109 14.7476C-0.0537109 10.4038 -0.0537109 6.11356 -0.0537109 1.76972C0.642718 0.321766 1.07129 0 2.67843 0C8.83915 0 14.9999 0 21.2141 0C22.8749 0 23.6784 0.804416 23.732 2.46688C23.732 3.53943 23.732 4.61199 23.732 5.68454C24.5891 5.25552 24.9106 5.30915 25.5534 5.95268C26.8391 7.23975 28.1249 8.52681 29.4106 9.81388C29.6784 10.082 29.8391 10.4574 30.0534 10.7792C29.9999 11.1009 29.9999 11.3691 29.9999 11.6372ZM11.8927 1.07256C8.78557 1.07256 5.67843 1.07256 2.62486 1.07256C2.41057 1.07256 2.14272 1.01893 2.03557 1.12618C1.71415 1.34069 1.39272 1.60883 1.17843 1.9306C1.12486 2.03785 1.44629 2.46688 1.66057 2.62776C4.87486 4.71924 8.08915 6.7571 11.3034 8.84858C11.732 9.11672 11.9999 9.11672 12.4284 8.84858C15.6427 6.7571 18.9106 4.71924 22.1249 2.62776C22.7141 2.25237 22.7141 1.71609 22.1249 1.34069C21.857 1.17981 21.5356 1.07256 21.2141 1.07256C18.107 1.07256 14.9999 1.07256 11.8927 1.07256ZM22.4999 14.5868C21.2677 14.5868 20.1427 14.5331 19.0713 14.5868C16.9284 14.694 16.1784 14.1577 16.2856 11.7445C16.3391 9.97476 16.2856 9.97476 14.7856 9.11672C14.6249 9.00946 14.3034 9.00946 14.0891 9.11672C13.4999 9.43849 12.9641 9.81388 12.3749 10.1893C11.9999 10.4574 11.732 10.4574 11.357 10.1893C10.7677 9.81388 10.232 9.43849 9.58915 9.06309C9.42843 8.95584 9.16057 8.95584 8.99986 9.06309C6.42843 10.6719 3.91057 12.2808 1.39272 13.9432C1.232 14.0505 1.12486 14.4259 1.17843 14.5868C1.39272 15.2303 1.92843 15.3375 2.51772 15.3375C7.39272 15.3375 12.2677 15.3375 17.1427 15.3375C18.5356 15.3375 19.8749 15.3375 21.2677 15.3375C21.8034 15.3375 22.232 15.2303 22.4999 14.5868ZM24.6963 6.70347C24.6963 7.29338 24.6963 7.66877 24.6963 8.04416C24.6963 8.79495 24.5891 8.95584 23.7856 8.95584C21.9641 8.95584 20.1963 8.95584 18.3749 8.95584C17.5177 8.95584 17.357 9.11672 17.357 10.0284C17.357 10.8328 17.357 11.6372 17.357 12.4416C17.357 13.2997 17.5177 13.5142 18.4284 13.5142C20.2499 13.5142 22.0177 13.5142 23.8391 13.5142C24.6427 13.5142 24.6963 13.6215 24.6963 14.4259C24.6963 14.8013 24.6963 15.1767 24.6963 15.7129C25.8749 14.5331 26.9463 13.4606 27.9641 12.4416C29.1427 11.2618 29.1427 11.2618 27.9641 10.082C26.9463 9.00946 25.8749 7.93691 24.6963 6.70347ZM8.24986 8.20505C5.89272 6.64984 3.53557 5.20189 1.17843 3.64669C1.17843 6.7571 1.17843 9.70662 1.17843 12.7634C3.53557 11.2082 5.89272 9.76025 8.24986 8.20505ZM16.4463 8.84858C16.8749 8.04416 17.6249 7.82965 18.4284 7.88328C18.9641 7.93691 19.5534 7.88328 20.0891 7.88328C20.8927 7.88328 21.6963 7.88328 22.4999 7.88328C22.4999 6.43533 22.4999 5.09464 22.4999 3.70032C20.0891 5.25552 17.7856 6.70347 15.4284 8.20505C15.8034 8.41956 16.0713 8.58044 16.4463 8.84858Z"
    fill="#21325E" />
  </svg>
`;
const pen = `
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M9.76894 3.82414C10.0703 4.05018 10.3717 4.35156 10.6731 4.65293C8.94015 6.38586 7.20723 8.04344 5.54964 9.77637C4.7962 10.5298 3.96741 11.3586 3.21396 12.112C2.98793 12.3381 2.83724 12.5641 2.7619 12.7901C2.46052 13.6189 2.23448 14.5231 2.00845 15.3519C1.78242 16.03 2.38517 16.5574 3.06327 16.3313C3.89206 16.1053 4.72085 15.8793 5.4743 15.5779C5.77568 15.4272 6.07706 15.2012 6.30309 14.9751C8.56343 12.7148 10.8238 10.4545 13.0841 8.19413C13.2348 8.04344 13.4608 7.81741 13.6115 7.66672C13.9129 8.04344 14.2143 8.34482 14.5156 8.72154C14.5156 8.72154 14.365 8.87223 14.2896 9.02292C11.8032 11.4339 9.39222 13.9203 6.90585 16.3313C6.67981 16.5574 6.45378 16.7081 6.22775 16.7834C4.57017 17.3108 2.83724 17.8382 1.10431 18.2903C0.802936 18.3656 0.350869 18.3656 0.124835 18.1396C-0.0258542 18.0643 -0.0258542 17.6122 0.0494904 17.3108C0.501558 15.5779 1.02897 13.9203 1.55638 12.1874C1.63173 11.9614 1.78242 11.7353 1.9331 11.5093C4.49482 8.87223 7.05654 6.23517 9.54291 3.52277C9.61825 3.67346 9.6936 3.7488 9.76894 3.82414Z"
      fill="#21325E" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M4.87123 14.5985C4.87123 13.7697 4.41916 13.4684 3.81641 13.4684C6.37812 10.9066 9.01518 8.26959 11.5769 5.70787C11.8783 6.00925 12.255 6.46132 12.6317 6.83804C10.07 9.32441 7.50829 11.8861 4.87123 14.5985Z"
      fill="#21325E" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M17.2282 5.8585C15.646 4.27627 14.1391 2.76937 12.5569 1.18714C13.461 -0.244408 14.5912 -0.395098 15.7967 0.810416C16.3241 1.33783 16.7762 1.86524 17.3036 2.31731C18.8105 3.74885 18.7351 4.5023 17.2282 5.8585Z"
      fill="#21325E" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M10.5977 2.84478C10.899 2.5434 11.2758 2.24202 11.5771 1.94064C13.2347 3.59822 14.817 5.2558 16.4745 6.91339C16.1732 7.13942 15.8718 7.51614 15.4951 7.81752C13.9128 6.15994 12.2552 4.50236 10.5977 2.84478Z"
      fill="#21325E" />
  </svg>
`;

/***/ }),

/***/ "./app/js/modules/validator.js":
/*!*************************************!*\
  !*** ./app/js/modules/validator.js ***!
  \*************************************/
/*! exports provided: validator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validator", function() { return validator; });
const validator = ({
  text,
  leng,
  values,
  match = false
}) => {
  let isValid = {
    valid: true
  };

  if (text.trim().length < leng) {
    isValid.valid = false;
    isValid.error = 'length';
  }

  if (match) {
    values.forEach(({
      name
    }) => {
      if (name === text) {
        isValid.valid = false;
        isValid.error = 'match';
      }
    });
  }

  return isValid;
};



/***/ })

/******/ });
//# sourceMappingURL=script.js.map