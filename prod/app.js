var app = {
    sdkVersion: "1.18",
    sdkProduct: "search",
    sdkAuth: {
        domainKey: 'eyJ0eXBlIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJwcm9qZWN0Ijoic2d1bmlzZXR0aV9zZWFyY2hfZW4iLCJkb21haW5fa2V5X2lkIjoiQlc0VDRBWmhreHpLMmtzQTU4bGFuUTo6In0.JNLrTyV1RAgtIa_yW9iLKhWrwC92CvAY-86grh-5QziB0xPDfsYh2doqeq9OMEdORSEzQxhqGYJoOdhw0IRDVg',
        publicKey: '5kbfWiHQ9xkMbDDkKwMiDeeBldc7cRQA7qEF0iy/6Og='
    }
}
var sdkConfig = {
    environment: "development", // Environments => "development" / "preproduction" / "production"
    labels: {
        REFINEMENT_TABS_ALL_TAB: "All Results",
        SEARCH_BOX_PLACEHOLDER: "Ask me anything",
        NO_RESULTS_NOT_FOUND_HEADER: 'omg',
        NO_RESULTS_NOT_FOUND_TITLE: 'NO_RESULTS_NOT_FOUND_TITLE',
        NO_RESULTS_NOT_FOUND_SUBTITLE: 'NO_RESULTS_NOT_FOUND_SUBTITLE',
        REFINEMENT_LISTS_SHOW_MORE: 'REFINEMENT_LISTS_SHOW_MORE',
        REFINEMENT_LISTS_SHOW_LESS: 'REFINEMENT_LISTS_SHOW_LESS',
        REFINEMENT_LISTS_TITLE: 'REFINEMENT_LISTS_TITLE'
    },
    userType: 0
}
var sdk = InbentaSearchSDK.createFromDomainKey(app.sdkAuth.domainKey, app.sdkAuth.publicKey, sdkConfig);

sdk.build('#inbenta',{
    searchBox: {
        autofocus: true,
        autocompleter: true,
    },
    results: {
        resultsPerPage: 10,
        attributes: ['BEST_DYNABS', 'URL'],
        ratings: [
            {
                id: 1,
                label: 'Yes',
                comment: true,
            },
            {
                id: 2,
                label: 'No',
                comment: true,
            },
        ],
    },

  /*  refinementLists: {
        refinements: [
        { attributeName: 'Gender', headerText: 'Gender' },
        { attributeName: 'Age Range', headerText: 'Age Range' },
        { attributeName: 'Product Category', headerText: 'Product Category' },
        { attributeName: 'Product Size', headerText: 'Product Size' },
        { attributeName: 'Price', headerText: 'Price' },
        { attributeName: 'Product Brand', headerText: 'Product Brand' },
        ]
    },
    
    refinementTabs: {
        attributeName: 'Product Type',
        showFacetCount: true,
        sortBy: ['name:asc']
    },
    sortBySelector: {
        attributes: [
            { name: 'desc(_relevance)', label: 'Relevance' },
            { name: 'desc(price)', label: 'Price - Descending' },
            { name: 'asc(price)', label: 'Price - Ascending' },
        ]
    },
    */
    resultsPerPageSelector: {
        options: [4, 8, 12],
    },
    pagination: {
        padding: 3,
    },
    stats: {
        text: 'Showing <strong>{{ totalResults }}</strong> results for: {{ query }}',
    },
    // autocompleter: {
    //     showViewAllButton: true,
    //     viewAllButtonHref: 'https://www.inbenta.com/en/',
    //     settingsToShow: [],
    //     target: '',
    //     baseUrl: '',
    //     filters: true,
    //     preload: true
    // },
    loader: true,
    router: true
});
