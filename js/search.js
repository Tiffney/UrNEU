$(document).ready(function() {


// multiple datasets
// -----------------

var nbaTeams = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: '../data/nba.json'
});

var nhlTeams = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: '../data/nhl.json'
});

nbaTeams.initialize();
nhlTeams.initialize();

$('#multiple-datasets .morphsearch-input').typeahead( {
    highlight: true
},
{
  name: 'nba-teams',
  displayKey: 'team',
  source: nbaTeams.ttAdapter(),
  templates: {
    header: '<h3 class="league-name">NBA Teams</h3>',
    empty: [
        '<div class="empty-message">',
        'unable to find any Best Picture winners that match the current query',
        '</div>'
      ].join('\n'),
      suggestion: Handlebars.compile('<p>{{team}} – </p>')
  }
},
{
  name: 'nhl-teams',
  displayKey: 'team',
  source: nhlTeams.ttAdapter(),
  templates: {
    header: '<h3 class="league-name">NHL Teams</h3>'
  }
});


});