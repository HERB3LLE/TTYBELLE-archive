// =================================
// 아카이브 자료
// =================================

let items = [

    // 사진
    {
        type: "photo",
        date: "2023-12-11",
        title: "음악중심 behind photo",
        file: "IMG_8264.jpeg"
    },

    {
        type: "photo",
        date: "2023-12-02",
        title: "심플리 behind photo",
        file: "IMG_8265.jpeg"
    },

    {
        type: "photo",
        date: "2025-06-14",
        title: "음악중심 behind photo",
        file: "IMG_8266.jpeg"
    },

    {
        type: "photo",
        date: "2025-06-25",
        title: "쇼챔피언 behind photo",
        file: "IMG_8267.jpeg"
    },

    {
        type: "photo",
        date: "2026-04-11",
        title: "음악중심 behind photo",
        file: "IMG_8268.jpeg"
    },

    {
        type: "photo",
        date: "2026-04-17",
        title: "뮤직뱅크 behind photo",
        file: "IMG_8269.jpeg"
    },

    {
        type: "photo",
        date: "2026-04-22",
        title: "쇼챔피언 behind photo",
        file: "IMG_8270.jpeg"
    },

    {
        type: "photo",
        date: "2026-08-08",
        title: "음악중심 behind photo",
        file: "IMG_8271.jpeg"
    },

    {
        type: "photo",
        date: "2026-08-12",
        title: "쇼챔피언 behind photo",
        file: "IMG_8272.jpeg"
    },

    {
        type: "photo",
        date: "2026-08-19",
        title: "쇼챔피언 behind photo",
        file: "IMG_8273.jpeg"
    },

    {
        type: "photo",
        date: "2026-04-22",
        title: "음악중심 behind photo",
        file: "IMG_8274.jpeg"
    },

    {
        type: "photo",
        date: "2025-08-06",
        title: "Sziget Festival 🐰🫧💬",
        file: "776fb4c918b4e464c3d2f4436d0b0e26652ce89f.jpeg"
    },

    {
        type: "photo",
        date: "2025-10-29",
        title: "연고지",
        file: "IMG_8284.jpeg"
    },

    {
        type: "photo",
        date: "2025-10-29",
        title: "연고지",
        file: "IMG_8285.jpeg"
    },

    {
        type: "photo",
        date: "2023-11-23",
        title: "다들 벨띠 매고 Drive 갈래?😎",
        file: "63B2C4E7-74B5-42ED-85E2-D70FC9EB83C4.jpeg"
    },

    {
        type: "photo",
        date: "2026-03-30",
        title: "[아이돌라디오] 항상 사이 좋았던 벨띠💜🩷 키씨들이 챙겨주고 이뻐해줘서 다행이야…",
        file: "0ECD77F3-6127-4770-B63E-339979C5CBFA.jpeg"
    },

    {
        type: "photo",
        date: "2024-05-30",
        title: "NATTY DAY",
        file: "E0AA6CE1-DA10-445B-8860-0BE8EC576915.jpeg"
    },

    {
        type: "photo",
        date: "2024-05-30",
        title: "NATTY DAY",
        file: "33E3D79F-C62F-4E15-B046-FCEDA33B5DA1.jpeg"
    },

    {
        type: "photo",
        date: "2024-05-30",
        title: "NATTY DAY",
        file: "4C315378-7E26-4BEE-B1D7-91D10658A853.jpeg"
    },

    {
        type: "photo",
        date: "2026-05-23",
        title: "상하이 데이트",
        file: "6182A261-1403-4495-B716-EE9E75730947.jpeg"
    },

    {
        type: "photo",
        date: "2026-05-23",
        title: "상하이 데이트",
        file: "E7CE2135-9AD8-4D24-A53C-C0E70456C7D0.jpeg"
    }

];


// =================================
// 현재 설정
// =================================

let currentFilter = "all";

let currentSort = "new";

let searchText = "";


// =================================
// 언어 설정
// =================================

const translations = {

    ko: {
        all: "ALL",
        photo: "PHOTO",
        video: "VIDEO",
        reels: "REELS",
        search: "Search",
        newest: "최신순",
        oldest: "과거순",
        empty: "No archive found."
    },

    en: {
        all: "ALL",
        photo: "PHOTO",
        video: "VIDEO",
        reels: "REELS",
        search: "Search",
        newest: "Newest",
        oldest: "Oldest",
        empty: "No archive found."
    },

    ja: {
        all: "すべて",
        photo: "写真",
        video: "動画",
        reels: "リール",
        search: "検索",
        newest: "新しい順",
        oldest: "古い順",
        empty: "アーカイブがありません。"
    },

    zh: {
        all: "全部",
        photo: "图片",
        video: "视频",
        reels: "Reels",
        search: "搜索",
        newest: "最新",
        oldest: "最早",
        empty: "没有找到档案。"
    },

    th: {
        all: "ทั้งหมด",
        photo: "รูปภาพ",
        video: "วิดีโอ",
        reels: "รีล",
        search: "ค้นหา",
        newest: "ล่าสุด",
        oldest: "เก่าสุด",
        empty: "ไม่พบข้อมูล"
    }

};


// =================================
// 언어 정보
// =================================

const languageInfo = {

    ko: {
        flag: "🇰🇷",
        name: "한국어"
    },

    en: {
        flag: "🇺🇸",
        name: "English"
    },

    ja: {
        flag: "🇯🇵",
        name: "日本語"
    },

    zh: {
        flag: "🇨🇳",
        name: "中文"
    },

    th: {
        flag: "🇹🇭",
        name: "ไทย"
    }

};


// =================================
// 현재 언어
// =================================

let currentLanguage =
    localStorage.getItem("ttybelle-language") || "ko";


// =================================
// 화면 표시
// =================================

function render() {

    const archive =
        document.getElementById("archive");

    let filteredItems = [...items];


    // 카테고리 필터
    if (currentFilter !== "all") {

        filteredItems =
            filteredItems.filter(
                item =>
                    item.type === currentFilter
            );

    }


    // 검색
    if (searchText.trim() !== "") {

        const keyword =
            searchText.toLowerCase().trim();

        filteredItems =
            filteredItems.filter(item =>

                item.title
                    .toLowerCase()
                    .includes(keyword)

                ||

                item.date.includes(keyword)

            );

    }


    // 최신순 / 과거순
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


    // 자료 없음
    if (filteredItems.length === 0) {

        archive.innerHTML = `
            <div class="empty">
                ${translations[currentLanguage].empty}
            </div>
        `;

        return;

    }


    // 자료 만들기
    filteredItems.forEach(item => {

        const element =
            document.createElement("article");

        element.className = "item";


        // =================================
        // PHOTO
        // =================================

        if (item.type === "photo") {

            element.innerHTML = `

                <div
                    class="media"
                    onclick="openImage('${item.file}')"
                >

                    <img
                        src="${item.file}"
                        alt="${item.title}"
                    >

                </div>

                <div class="info">

                    <div class="title">
                        ${item.title}
                    </div>

                    <div class="date">
                        ${formatDate(item.date)}
                    </div>

                    <div class="type">
                        ${translations[currentLanguage].photo}
                    </div>

                </div>

            `;

        }


        // =================================
        // VIDEO
        // =================================

        else if (item.type === "video") {

            element.innerHTML = `

                <div class="media">

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
                        ${translations[currentLanguage].video}
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

                    <div class="media">

                        <img
                            src="${item.file}"
                            alt="${item.title}"
                        >

                        <span class="reels-label">
                            REELS ↗
                        </span>

                    </div>

                </a>

                <div class="info">

                    <div class="title">
                        ${item.title}
                    </div>

                    <div class="date">
                        ${formatDate(item.date)}
                    </div>

                    <div class="type">
                        ${translations[currentLanguage].reels}
                    </div>

                </div>

            `;

        }


        archive.appendChild(element);

    });

}


// =================================
// 카테고리
// =================================

function filterItems(type, button) {

    currentFilter = type;


    document
        .querySelectorAll(".category")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    button.classList.add("active");


    render();

}


// =================================
// 정렬
// =================================

function changeSort() {

    const select =
        document.getElementById("sort");

    currentSort =
        select.value;

    render();

}


// =================================
// 검색
// =================================

function searchItems() {

    const search =
        document.getElementById("search");

    searchText =
        search.value;

    render();

}


// =================================
// 날짜
// =================================

function formatDate(date) {

    const parts =
        date.split("-");

    return `${parts[0]}.${parts[1]}.${parts[2]}`;

}


// =================================
// 사진 확대
// =================================

function openImage(src) {

    const modal =
        document.getElementById("imageModal");

    const image =
        document.getElementById("modalImage");

    image.src = src;

    modal.classList.add("show");

}


// =================================
// 확대 닫기
// =================================

function closeModal() {

    const modal =
        document.getElementById("imageModal");

    modal.classList.remove("show");

}


// =================================
// 언어 메뉴 열기 / 닫기
// =================================

function toggleLanguageMenu() {

    const menu =
        document.getElementById("languageMenu");

    menu.classList.toggle("show");

}


// =================================
// 언어 변경
// =================================

function changeLanguage(language) {

    if (!translations[language]) {
        return;
    }

    currentLanguage = language;


    // 저장
    localStorage.setItem(
        "ttybelle-language",
        language
    );


    // 현재 언어 버튼
    const currentFlag =
        document.getElementById("currentFlag");

    const currentLanguageElement =
        document.getElementById("currentLanguage");

    currentFlag.textContent =
        languageInfo[language].flag;

    currentLanguageElement.textContent =
        languageInfo[language].name;


    // 언어 메뉴 active 표시
    document
        .querySelectorAll(".language-option")
        .forEach(option => {

            option.classList.remove("active");

        });


    const selectedOption =
        document.querySelector(
            `.language-option[data-language="${language}"]`
        );

    if (selectedOption) {
        selectedOption.classList.add("active");
    }


    // UI 번역
    applyTranslations();


    // 게시물 다시 표시
    render();


    // 메뉴 닫기
    document
        .getElementById("languageMenu")
        .classList.remove("show");

}


// =================================
// UI 번역 적용
// =================================

function applyTranslations() {

    const language =
        translations[currentLanguage];


    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            if (language[key]) {

                element.textContent =
                    language[key];

            }

        });


    const search =
        document.getElementById("search");

    if (search) {

        search.placeholder =
            language.search;

    }


    document.documentElement.lang =
        currentLanguage;

}


// =================================
// 메뉴 바깥 클릭
// =================================

document.addEventListener(
    "click",
    function(event) {

        const selector =
            document.querySelector(
                ".language-selector"
            );

        const menu =
            document.getElementById(
                "languageMenu"
            );

        if (
            selector &&
            menu &&
            !selector.contains(event.target)
        ) {

            menu.classList.remove("show");

        }

    }
);


// =================================
// 시작
// =================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        // 저장된 언어 적용
        changeLanguage(currentLanguage);

    }
);