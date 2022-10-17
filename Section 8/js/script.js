// $(function () {
//   // $.load()
//   $("#code").load("/js/script.js");

//   $("#code").load("js/script.js", (res, status) => {
//     if (status == "error") {
//       alert("Error loading script.js");
//     }
//     console.log(res);
//   });
// });

// $(function () {
//   const flickAPI =
//     "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

//   $.getJSON(flickAPI, {
//     // options
//     format: "json",
//     tags: "sun, beach",
//     tagmode: "all",
//   })
//     .done(function (data) {
//       // success
//       $.each(data.items, (i, v) =>
//         i < 5 ? $("<img>").attr("src", v.media.m).appendTo($("#flickr")) : false
//       );
//     })
//     .fail(function () {
//       // failure
//       alert("AJAX failed");
//     });
// });

$(function () {
  const pokemon = "https://pokeapi.co/api/v2/generation/1";
  const pokemonNames = "https://pokeapi.co/api/v2/pokemon";

  $.getJSON(pokemon)
    .done(function (data) {
      const pokemons = data.pokemon_species;
      const bulbosaur = pokemons[0];
      console.log(bulbosaur.name);
      $.each(pokemons, function (i, poke) {
        const name = poke.name[0].toUpperCase() + poke.name.slice(1);
        const link = $("<a>")
          .attr("id", poke.name)
          .attr("href", "#")
          .append($("<strong>").text(name));

        link.click(function (e) {
          e.preventDefault();
          $.getJSON(`${pokemonNames}/${poke.name}`).done(function (details) {
            console.log(details);
            const pokeDetailsEl = $("#pokemon-details");
            pokeDetailsEl.empty();
            pokeDetailsEl.append(`<h2>${name}</h2>`);
            pokeDetailsEl.append(
              `<img src="${details.sprites.front_default}">`
            );
          });
        });

        const par = $("<p>")
          .html(`Pokemon species no. ${i + 1} is `)
          .append(link);
        par.appendTo("#pokemon");
      });
    })
    .fail(function () {
      console.error("Failed to fetch Pokemons");
    })
    .always(() => console.log("Request to PokeAPI processed"));
});
