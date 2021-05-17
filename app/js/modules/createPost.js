import { mail, pen } from './svg';

const createPost = (posts, prevSelector) => {
  const $prevEl = document.querySelector(prevSelector);

  posts.forEach(post => {
    const $item = document.createElement('div');
    const {automatic} = post;
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
                 ${mail}
                </div>
                <span>תחילש
                  העצהה</span>
              </a>
              <a class="app-item__link" href="#">
                <div class="app-item__link-img">
                  ${pen}
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

export {createPost};