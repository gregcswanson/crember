App.store = DS.Store.create({
    revision: 11,
    adapter: 'DS.FixtureAdapter'
});

App.About.FIXTURES = [
    {id: '1', name: 'Fixture object 1'},
    {id: '2', name: 'Fixture object 2'}
];

