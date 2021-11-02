async function getTheme(word, side, otherword_arg = "") {

    let query = ""
    if (word == "top_words") {
        query = ""
    } else {

        
        let otherword = ""
        if (otherword_arg == "") {
            if (side == "right") {
                otherword = document.getElementById("l_theme_word").value;
            } else {
                otherword = document.getElementById("r_theme_word").value;
            }
        } else {
            otherword = otherword_arg;
        }

        query = `query get_counts_by_word_site 
        {
            keywords(where: {name: {_eq: "`+word+`" }}) 
            {
                name
                associated_1_count
                associated_2_count
                associated_3_count
                associated_4_count
                associated_5_count
                associated_6_count
                associated_7_count
                associated_8_count
                associated_9_count
                associated_10_count
                keyword_1 {
                    name
                }
                keyword_2 {
                    name
                }
                keyword_3 {
                    name
                }
                keyword_4 {
                    name
                }
                keyword_5 {
                    name
                }
                keyword_6 {
                    name
                }
                keyword_7 {
                    name
                }
                keyword_8 {
                    name
                }
                keyword_9 {
                    name
                }
                keyword_10 {
                    name
                }
                join_to_link(where: {link: {join_to_keyword: {keyword: {name: {_eq: "`+otherword+`"}}}}}) {
                    link { link }
                }
            }
        }` 

    }
    // console.log(query)

    const hasura_query = fetch("https://free-brain.hasura.app/v1/graphql", {
        body: JSON.stringify({query: query}),
        method: "POST"
    }).then( (response) => {return response.json()} );

    const data = await hasura_query;
    console.log(data);
    const extract = data.data.keywords[0];
    console.log(extract);

    // Display it on the site

    document.getElementById("l_theme_word").style = "display: block;";
    document.getElementById("r_theme_word").style = "display: block;";

    document.getElementById("l_placeholder").innerText = "";
    document.getElementById("r_placeholder").innerText = ""

    if (side == "left") {

        document.getElementById("l_theme_word").placeholder = extract.name;
        document.getElementById("las1").innerText = extract.keyword_1.name;
        document.getElementById("las1c").innerText = extract.associated_1_count;
        document.getElementById("las2").innerText = extract.keyword_2.name;
        document.getElementById("las2c").innerText = extract.associated_2_count;
        document.getElementById("las3").innerText = extract.keyword_3.name;
        document.getElementById("las3c").innerText = extract.associated_3_count;
        document.getElementById("las4").innerText = extract.keyword_4.name;
        document.getElementById("las4c").innerText = extract.associated_4_count;
        document.getElementById("las5").innerText = extract.keyword_5.name;
        document.getElementById("las5c").innerText = extract.associated_5_count;
        document.getElementById("las6").innerText = extract.keyword_6.name;
        document.getElementById("las6c").innerText = extract.associated_6_count;
        document.getElementById("las7").innerText = extract.keyword_7.name;
        document.getElementById("las7c").innerText = extract.associated_7_count;
        document.getElementById("las8").innerText = extract.keyword_8.name;
        document.getElementById("las8c").innerText = extract.associated_8_count;
        document.getElementById("las9").innerText = extract.keyword_9.name;
        document.getElementById("las9c").innerText = extract.associated_9_count;
        document.getElementById("las10").innerText = extract.keyword_10.name;
        document.getElementById("las10c").innerText = extract.associated_10_count;

    }

    if (side == "right") {

        document.getElementById("r_theme_word").placeholder = extract.name;
        document.getElementById("ras1").innerText = extract.keyword_1.name;
        document.getElementById("ras1c").innerText = extract.associated_1_count;
        document.getElementById("ras2").innerText = extract.keyword_2.name;
        document.getElementById("ras2c").innerText = extract.associated_2_count;
        document.getElementById("ras3").innerText = extract.keyword_3.name;
        document.getElementById("ras3c").innerText = extract.associated_3_count;
        document.getElementById("ras4").innerText = extract.keyword_4.name;
        document.getElementById("ras4c").innerText = extract.associated_4_count;
        document.getElementById("ras5").innerText = extract.keyword_5.name;
        document.getElementById("ras5c").innerText = extract.associated_5_count;
        document.getElementById("ras6").innerText = extract.keyword_6.name;
        document.getElementById("ras6c").innerText = extract.associated_6_count;
        document.getElementById("ras7").innerText = extract.keyword_7.name;
        document.getElementById("ras7c").innerText = extract.associated_7_count;
        document.getElementById("ras8").innerText = extract.keyword_8.name;
        document.getElementById("ras8c").innerText = extract.associated_8_count;
        document.getElementById("ras9").innerText = extract.keyword_9.name;
        document.getElementById("ras9c").innerText = extract.associated_9_count;
        document.getElementById("ras10").innerText = extract.keyword_10.name;
        document.getElementById("ras10c").innerText = extract.associated_10_count;

    }

    // Format it for site

    /*add_height = 0;

    height = (extract.associated_1_count / extract.associated_1_count) * 10;
    document.getElementById("las1").style = "font-size: " + height.toString() + "vmin; line-height: " + (height + add_height).toString() + "vmin;";
    height = (extract.associated_2_count / extract.associated_1_count) * 10
    document.getElementById("las2").style = "font-size: " + height.toString() + "vmin; line-height: " + (height + add_height).toString() + "vmin;";
    height = (extract.associated_3_count / extract.associated_1_count) * 10
    document.getElementById("las3").style = "font-size: " + height.toString() + "vmin; line-height: " + (height + add_height).toString() + "vmin;";
    height = (extract.associated_4_count / extract.associated_1_count) * 10
    document.getElementById("las4").style = "font-size: " + height.toString() + "vmin; line-height: " + (height + add_height).toString() + "vmin;";
    height = (extract.associated_5_count / extract.associated_1_count) * 10
    document.getElementById("las5").style = "font-size: " + height.toString() + "vmin; line-height: " + (height + add_height).toString() + "vmin;";
    height = (extract.associated_6_count / extract.associated_1_count) * 10
    document.getElementById("las6").style = "font-size: " + height.toString() + "vmin; line-height: " + (height + add_height).toString() + "vmin;";
    height = (extract.associated_7_count / extract.associated_1_count) * 10
    document.getElementById("las7").style = "font-size: " + height.toString() + "vmin; line-height: " + (height + add_height).toString() + "vmin;";
    height = (extract.associated_8_count / extract.associated_1_count) * 10
    document.getElementById("las8").style = "font-size: " + height.toString() + "vmin; line-height: " + (height + add_height).toString() + "vmin;";
    height = (extract.associated_9_count / extract.associated_1_count) * 10
    document.getElementById("las9").style = "font-size: " + height.toString() + "vmin; line-height: " + (height + add_height).toString() + "vmin;";
    height = (extract.associated_10_count / extract.associated_1_count) * 10
    document.getElementById("las10").style = "font-size: " + height.toString() + "vmin; line-height: " + (height + add_height).toString() + "vmin;";*/

    // Get links

    let links_arr = extract.join_to_link;
    links_arr = [...new Set(links_arr)];
    let links = "No. Links: " + links_arr.length.toString() + "<br>"

    for (let i = 0; i < links_arr.length; i++) {
        links += '<a href="' + links_arr[i].link.link + '" target="_blank" rel="noopener noreferrer">' + links_arr[i].link.link + '</a><br>'
    }
    document.getElementById("links").innerHTML = links

}

window.onload = async () => {

    // First, pick a random word
    query = "query random_word_site { keywords { name } }"
    const hasura_query = fetch("https://free-brain.hasura.app/v1/graphql", {
        body: JSON.stringify({query: query}),
        method: "POST"
    }).then( (response) => {return response.json()} );
    let words = await hasura_query;
    words = words.data.keywords;
    const rand_word_l = words[~~(Math.random() * words.length)].name;
    const rand_word_r = words[~~(Math.random() * words.length)].name;

    getTheme(rand_word_l, "left", rand_word_r)
    getTheme(rand_word_r, "right", rand_word_l)
}

function getting_new(side) {

    if (side == "left") {  

        let words = document.getElementsByClassName("left");
        for (let word = 0; word < words.length; word++) {
            words[word].innerText = "";
        }

        document.getElementById("l_theme_word").style = "display: none;";
        document.getElementById("l_placeholder").innerText = "Getting words...";
    } else if (side == "right") {

        let words = document.getElementsByClassName("right");
        for (let word = 0; word < words.length; word++) {
            words[word].innerText = "";
        }

        document.getElementById("r_theme_word").style = "display: none;";
        document.getElementById("r_placeholder").innerText = "Getting words...";
    }

}

// Detect enter key to submit typed words
function enterPressed(event, side) {
    if (event.keyCode == 13) {
        console.log(side);
        getting_new(side);
        if (side == "left") { getTheme(document.getElementById("l_theme_word").value, side) }
        else if (side == "right") { getTheme(document.getElementById("r_theme_word").value, side) } 
    }
}

// Detect clicks
// Left side

const las1 = document.getElementById("las1");
las1.addEventListener("click", () => {
    getTheme(document.getElementById("las1").innerText, "right");
    getting_new("right");
});

const las2 = document.getElementById("las2");
las2.addEventListener("click", () => {
    getTheme(document.getElementById("las2").innerText, "right");
    getting_new("right");
});

const las3 = document.getElementById("las3");
las3.addEventListener("click", () => {
    getTheme(document.getElementById("las3").innerText, "right");
    getting_new("right");
});

const las4 = document.getElementById("las4");
las4.addEventListener("click", () => {
    getTheme(document.getElementById("las4").innerText, "right");
    getting_new("right");
});

const las5 = document.getElementById("las5");
las5.addEventListener("click", () => {
    getTheme(document.getElementById("las5").innerText, "right");
    getting_new("right");
});

const las6 = document.getElementById("las6");
las6.addEventListener("click", () => {
    getTheme(document.getElementById("las6").innerText, "right");
    getting_new("right");
});

const las7 = document.getElementById("las7");
las7.addEventListener("click", () => {
    getTheme(document.getElementById("las7").innerText, "right");
    getting_new("right");
});

const las8 = document.getElementById("las8");
las8.addEventListener("click", () => {
    getTheme(document.getElementById("las8").innerText, "right");
    getting_new("right");
});

const las9 = document.getElementById("las9");
las9.addEventListener("click", () => {
    getTheme(document.getElementById("las9").innerText, "right");
    getting_new("right");
});

const las10 = document.getElementById("las10");
las10.addEventListener("click", () => {
    getTheme(document.getElementById("las10").innerText, "right");
    getting_new("right");
});

// right side

const ras1 = document.getElementById("ras1");
ras1.addEventListener("click", () => {
    getTheme(document.getElementById("ras1").innerText, "left");
    getting_new("left");
});

const ras2 = document.getElementById("ras2");
ras2.addEventListener("click", () => {
    getTheme(document.getElementById("ras2").innerText, "left");
    getting_new("left");
});

const ras3 = document.getElementById("ras3");
ras3.addEventListener("click", () => {
    getTheme(document.getElementById("ras3").innerText, "left");
    getting_new("left");
});

const ras4 = document.getElementById("ras4");
ras4.addEventListener("click", () => {
    getTheme(document.getElementById("ras4").innerText, "left");
    getting_new("left");
});

const ras5 = document.getElementById("ras5");
ras5.addEventListener("click", () => {
    getTheme(document.getElementById("ras5").innerText, "left");
    getting_new("left");
});

const ras6 = document.getElementById("ras6");
ras6.addEventListener("click", () => {
    getTheme(document.getElementById("ras6").innerText, "left");
    getting_new("left");
});

const ras7 = document.getElementById("ras7");
ras7.addEventListener("click", () => {
    getTheme(document.getElementById("ras7").innerText, "left");
    getting_new("left");
});

const ras8 = document.getElementById("ras8");
ras8.addEventListener("click", () => {
    getTheme(document.getElementById("ras8").innerText, "left");
    getting_new("left");
});

const ras9 = document.getElementById("ras9");
ras9.addEventListener("click", () => {
    getTheme(document.getElementById("ras9").innerText, "left");
    getting_new("left");
});

const ras10 = document.getElementById("ras10");
ras10.addEventListener("click", () => {
    getTheme(document.getElementById("ras10").innerText, "left");
    getting_new("left");
});
