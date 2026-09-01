// =================================
// ARCHIVE DATA
// =================================

let items = [

    // =================================
    // 여러 장 사진 포스트
    // =================================

    {
        type: "photo",

        date: "2026-08-19",

        title: "쇼챔피언 behind photo",

        files: [
            "images/IMG_8273.jpeg",
            "images/IMG_8274.jpeg",
            "images/IMG_8275.jpeg"
        ]
    },


    // =================================
    // 한 장짜리 사진
    // =================================

    {
        type: "photo",

        date: "2026-08-17",

        title: "음악중심 behind photo",

        files: [
            "images/IMG_8271.jpeg"
        ]
    },


    {
        type: "photo",

        date: "2026-08-16",

        title: "쇼챔피언 behind photo",

        files: [
            "images/IMG_8272.jpeg"
        ]
    },


    // =================================
    // 영상
    // =================================

    {
        type: "video",

        date: "2026-08-14",

        title: "VIDEO",

        file: "images/1.mp4"
    },


    // =================================
    // 릴스
    // =================================

    {
        type: "reels",

        date: "2026-08-13",

        title: "REELS",

        file: "images/reels1.jpg",

        link:
            "https://www.instagram.com/"
    }

];


// =================================
// SETTINGS
// =================================

let currentFilter = "all";

let currentSort = "new";

let searchText = "";


// =================================
// SLIDER STATE
// =================================

let sliderStates = {};


// =================================
// RENDER
// =================================

function render() {

    const archive =
        document.getElementById("archive");


    let filteredItems =
        [...items];


    // =================================
    // FILTER
    // =================================

    if (currentFilter !== "all") {

        filteredItems =
            filteredItems.filter(
                item =>
                    item.type === currentFilter
            );

    }


    // =================================
    // SEARCH
    // =================================

    if (searchText.trim() !== "") {

        const keyword =
            searchText
                .toLowerCase()
                .trim();


        filteredItems =
            filteredItems.filter(item =>

                item.title
                    .toLowerCase()
                    .includes(keyword)

                ||

                item.date
                    .includes(keyword)

            );

    }


    // =================================
    // SORT
    // =================================

    filteredItems.sort((a, b) => {

        const dateA =
            new Date(a.date);

        const dateB =
            new Date(b.date);


        if (currentSort === "new") {

            return dateB - dateA;

        }


        return dateA - dateB;

    });


    archive.innerHTML = "";


    // =================================
    // EMPTY
    // =================================

    if (filteredItems.length === 0) {

        archive.innerHTML = `

            <div class="empty">
                No archive found.
            </div>

        `;

        return;

    }


    // =================================
    // CREATE POSTS
    // =================================

    filteredItems.forEach(
        (item, itemIndex) => {

        const element =
            document.createElement(
                "article"
            );


        element.className =
            "item";


        // =================================
        // PHOTO
        // =================================

        if (item.type === "photo") {

            const photos =
                item.files || [item.file];


            const sliderId =
                "slider-" +
                Math.random()
                    .toString(36)
                    .substring(2, 10);


            sliderStates[sliderId] = 0;


            element.innerHTML = `

                <div
                    class="post-slider"
                    id="${sliderId}"
                >

                    <div
                        class="slider-track"
                    >

                        ${photos.map(
                            (photo, index) => `

                            <img
                                src="${photo}"
                                class="slide-image"
                                alt="${item.title}"
                                data-index="${index}"
                            >

                        `
                        ).join("")}

                    </div>

                </div>


                ${
                    photos.length > 1

                    ? `

                    <div
                        class="dots"
                    >

                        ${photos.map(
                            (photo, index) => `

                            <button
                                class="dot ${
                                    index === 0
                                    ? "active"
                                    : ""
                                }"
                                onclick="
                                    goToSlide(
                                        '${sliderId}',
                                        ${index}
                                    )
                                "
                            ></button>

                        `
                        ).join("")}

                    </div>

                    `

                    : ""
                }


                <div class="info">

                    <div class="title">
                        ${item.title}
                    </div>

                    <div class="date">
                        ${formatDate(item.date)}
                    </div>

                    <div class="type">
                        PHOTO
                    </div>

                </div>

            `;


            // =================================
            // SWIPE
            // =================================

            if (photos.length > 1) {

                setupSwipe(
                    sliderId,
                    photos.length
                );

            }


            // =================================
            // IMAGE CLICK
            // =================================

            const images =
                element.querySelectorAll(
                    ".slide-image"
                );


            images.forEach(image => {

                image.addEventListener(
                    "click",
                    function(event) {

                        event.stopPropagation();

                        openImage(
                            this.src
                        );

                    }
                );

            });

        }


        // =================================
        // VIDEO
        // =================================

        else if (item.type === "video") {

            element.innerHTML = `

                <div class="media-video">

                    <video
                        src="${item.file}"
                        controls
                        playsinline
                    ></video>

                </div>


                <div class="info">

                    <div class="title">
                        ${item.title}
                    </div>

                    <div class="date">
                        ${formatDate(item.date)}
                    </div>

                    <div class="type">
                        VIDEO
                    </div>

                </div>

            `;

        }


        // =================================
        // REELS
        // =================================

        else if (item.type === "reels") {

            element.innerHTML = `

                <a
                    class="reels-link"
                    href="${item.link}"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <img
                        src="${item.file}"
                        alt="${item.title}"
                    >

                    <span class="reels-label">
                        REELS ↗
                    </span>

                </a>


                <div class="info">

                    <div class="title">
                        ${item.title}
                    </div>

                    <div class="date">
                        ${formatDate(item.date)}
                    </div>

                    <div class="type">
                        REELS
                    </div>

                </div>

            `;

        }


        archive.appendChild(element);

    });

}


// =================================
// SWIPE SETUP
// =================================

function setupSwipe(id, total) {

    const slider =
        document.getElementById(id);


    const track =
        slider.querySelector(
            ".slider-track"
        );


    let startX = 0;

    let startY = 0;


    slider.addEventListener(
        "touchstart",
        function(event) {

            startX =
                event.touches[0].clientX;

            startY =
                event.touches[0].clientY;

        },
        { passive: true }
    );


    slider.addEventListener(
        "touchend",
        function(event) {

            const endX =
                event.changedTouches[0].clientX;

            const endY =
                event.changedTouches[0].clientY;


            const differenceX =
                endX - startX;

            const differenceY =
                endY - startY;


            // 세로 스크롤이면 무시
            if (
                Math.abs(differenceY)
                >
                Math.abs(differenceX)
            ) {

                return;

            }


            // 너무 조금 움직였으면 무시
            if (
                Math.abs(differenceX) < 40
            ) {

                return;

            }


            let current =
                sliderStates[id] || 0;


            // 왼쪽으로 밀기
            if (differenceX < 0) {

                current++;

            }


            // 오른쪽으로 밀기
            else {

                current--;

            }


            // 마지막 → 처음
            if (current >= total) {

                current = 0;

            }


            // 처음 → 마지막
            if (current < 0) {

                current =
                    total - 1;

            }


            sliderStates[id] =
                current;


            updateSlide(
                id,
                current
            );

        },
        { passive: true }
    );

}


// =================================
// SLIDE
// =================================

function goToSlide(id, index) {

    sliderStates[id] =
        index;


    updateSlide(
        id,
        index
    );

}


function updateSlide(id, index) {

    const slider =
        document.getElementById(id);


    if (!slider) {
        return;
    }


    const track =
        slider.querySelector(
            ".slider-track"
        );


    track.style.transform =
        `translateX(-${index * 100}%)`;


    const dots =
        slider
            .parentElement
            .querySelectorAll(
                ".dot"
            );


    dots.forEach(
        (dot, dotIndex) => {

            dot.classList.toggle(
                "active",
                dotIndex === index
            );

        }
    );

}


// =================================
// FILTER
// =================================

function filterItems(
    type,
    button
) {

    currentFilter =
        type;


    document
        .querySelectorAll(
            ".category"
        )
        .forEach(btn => {

            btn.classList.remove(
                "active"
            );

        });


    button.classList.add(
        "active"
    );


    render();

}


// =================================
// SORT
// =================================

function changeSort() {

    const select =
        document.getElementById(
            "sort"
        );


    currentSort =
        select.value;


    render();

}


// =================================
// SEARCH
// =================================

function searchItems() {

    const search =
        document.getElementById(
            "search"
        );


    searchText =
        search.value;


    render();

}


// =================================
// DATE
// =================================

function formatDate(date) {

    const parts =
        date.split("-");


    return (
        parts[0] +
        "." +
        parts[1] +
        "." +
        parts[2]
    );

}


// =================================
// IMAGE MODAL
// =================================

function openImage(src) {

    const modal =
        document.getElementById(
            "imageModal"
        );


    const image =
        document.getElementById(
            "modalImage"
        );


    image.src =
        src;


    modal.classList.add(
        "show"
    );

}


// =================================
// CLOSE MODAL
// =================================

function closeModal() {

    const modal =
        document.getElementById(
            "imageModal"
        );


    modal.classList.remove(
        "show"
    );

}


// =================================
// START
// =================================

render();