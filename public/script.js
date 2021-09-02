async function getTheme(word) {

    const query = `query get_word_with_counts {
        keywords(where: {name: {_eq: "` + word + `" }}) {
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

      console.log(query)

    const hasura_query = fetch("https://free-brain.hasura.app/v1/graphql", {
        body: query,
        method: "POST",
        headers: {
            X_HASURA_ROLE: "user"
        }
    }).then( (response) => {return response} );

    const data = await hasura_query;
    console.log(data);

}

window.onload = () => {
    getTheme("blair")
}