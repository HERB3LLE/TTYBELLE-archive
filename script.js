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
    
    

];

// =================================
// 현재 설정
// =================================

let currentFilter = "all";

let currentSort = "new";

let searchText = "";

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
                No archive found.
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
                        PHOTO
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
                        REELS
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
// 시작
// =================================

render();