module.exports = {
    linters: {
        '**/*.+(js|md|ts|css|sass|less|graphql|yml|yaml|scss|json|vue)': [
            'prettier --write',
            'eslint --fix',
            'git add'
        ]
    }
}
