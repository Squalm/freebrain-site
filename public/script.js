async function getTheme(word) {

    let query = ""
    if (word == "top_words") {
        query = ""
    } else {

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
            }
        }` 

    }

    const hasura_query = fetch("https://free-brain.hasura.app/v1/graphql", {
        body: JSON.stringify({query: query}),
        method: "POST"
    }).then( (response) => {return response.json()} );

    const data = await hasura_query;
    const extract = data.data.keywords[0];
    console.log(extract);

    // Display it on the site

    let words = document.getElementsByClassName("word_box");
    for (let word = 0; word < words.length; word++) {
        words[word].style = "display: block;";
    }
    document.getElementById("theme_word").style = "display: block;";

    document.getElementById("placeholder").style = "display: none";
    document.getElementById("theme_word").innerText = extract.name +":";
    document.getElementById("as1").innerText = extract.keyword_1.name;
    document.getElementById("as1c").innerText = extract.associated_1_count;
    document.getElementById("as2").innerText = extract.keyword_2.name;
    document.getElementById("as2c").innerText = extract.associated_2_count;
    document.getElementById("as3").innerText = extract.keyword_3.name;
    document.getElementById("as3c").innerText = extract.associated_3_count;
    document.getElementById("as4").innerText = extract.keyword_4.name;
    document.getElementById("as4c").innerText = extract.associated_4_count;
    document.getElementById("as5").innerText = extract.keyword_5.name;
    document.getElementById("as5c").innerText = extract.associated_5_count;
    document.getElementById("as6").innerText = extract.keyword_6.name;
    document.getElementById("as6c").innerText = extract.associated_6_count;
    document.getElementById("as7").innerText = extract.keyword_7.name;
    document.getElementById("as7c").innerText = extract.associated_7_count;
    document.getElementById("as8").innerText = extract.keyword_8.name;
    document.getElementById("as8c").innerText = extract.associated_8_count;
    document.getElementById("as9").innerText = extract.keyword_9.name;
    document.getElementById("as9c").innerText = extract.associated_9_count;
    document.getElementById("as10").innerText = extract.keyword_10.name;
    document.getElementById("as10c").innerText = extract.associated_10_count;

    // Format it for site

    /*add_height = 0;

    height = (extract.associated_1_count / extract.associated_1_count) * 10;
    document.getElementById("as1").style = "font-size: " + height.toString() + "vmin; line-height: " + (height + add_height).toString() + "vmin;";
    height = (extract.associated_2_count / extract.associated_1_count) * 10
    document.getElementById("as2").style = "font-size: " + height.toString() + "vmin; line-height: " + (height + add_height).toString() + "vmin;";
    height = (extract.associated_3_count / extract.associated_1_count) * 10
    document.getElementById("as3").style = "font-size: " + height.toString() + "vmin; line-height: " + (height + add_height).toString() + "vmin;";
    height = (extract.associated_4_count / extract.associated_1_count) * 10
    document.getElementById("as4").style = "font-size: " + height.toString() + "vmin; line-height: " + (height + add_height).toString() + "vmin;";
    height = (extract.associated_5_count / extract.associated_1_count) * 10
    document.getElementById("as5").style = "font-size: " + height.toString() + "vmin; line-height: " + (height + add_height).toString() + "vmin;";
    height = (extract.associated_6_count / extract.associated_1_count) * 10
    document.getElementById("as6").style = "font-size: " + height.toString() + "vmin; line-height: " + (height + add_height).toString() + "vmin;";
    height = (extract.associated_7_count / extract.associated_1_count) * 10
    document.getElementById("as7").style = "font-size: " + height.toString() + "vmin; line-height: " + (height + add_height).toString() + "vmin;";
    height = (extract.associated_8_count / extract.associated_1_count) * 10
    document.getElementById("as8").style = "font-size: " + height.toString() + "vmin; line-height: " + (height + add_height).toString() + "vmin;";
    height = (extract.associated_9_count / extract.associated_1_count) * 10
    document.getElementById("as9").style = "font-size: " + height.toString() + "vmin; line-height: " + (height + add_height).toString() + "vmin;";
    height = (extract.associated_10_count / extract.associated_1_count) * 10
    document.getElementById("as10").style = "font-size: " + height.toString() + "vmin; line-height: " + (height + add_height).toString() + "vmin;";*/

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
    const rand_word = words[~~(Math.random() * words.length)].name;

    console.log(rand_word)

    getTheme(rand_word)
}

function getting_new() {
    let words = document.getElementsByClassName("word_box");
    for (let word = 0; word < words.length; word++) {
        words[word].style = "display: none;";
    }
    document.getElementById("theme_word").style = "display: none;";
    document.getElementById("placeholder").style = "display: block;";
}

// Detect clicks
const as1 = document.getElementById("as1");
as1.addEventListener("click", () => {
    getTheme(document.getElementById("as1").innerText);
    getting_new();
});

const as2 = document.getElementById("as2");
as2.addEventListener("click", () => {
    getTheme(document.getElementById("as2").innerText);
    getting_new();
});

const as3 = document.getElementById("as3");
as3.addEventListener("click", () => {
    getTheme(document.getElementById("as3").innerText);
    getting_new();
});

const as4 = document.getElementById("as4");
as4.addEventListener("click", () => {
    getTheme(document.getElementById("as4").innerText);
    getting_new();
});

const as5 = document.getElementById("as5");
as5.addEventListener("click", () => {
    getTheme(document.getElementById("as5").innerText);
    getting_new();
});

const as6 = document.getElementById("as6");
as6.addEventListener("click", () => {
    getTheme(document.getElementById("as6").innerText);
    getting_new();
});

const as7 = document.getElementById("as7");
as7.addEventListener("click", () => {
    getTheme(document.getElementById("as7").innerText);
    getting_new();
});

const as8 = document.getElementById("as8");
as8.addEventListener("click", () => {
    getTheme(document.getElementById("as8").innerText);
    getting_new();
});

const as9 = document.getElementById("as9");
as9.addEventListener("click", () => {
    getTheme(document.getElementById("as9").innerText);
    getting_new();
});

const as10 = document.getElementById("as10");
as10.addEventListener("click", () => {
    getTheme(document.getElementById("as10").innerText);
    getting_new();
});
