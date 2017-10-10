export function fireRuleForForm(answers) {
    // INPUT:
    // const answers = {
    //     answer1: 'Update beneficiary',
    //     answer2: 'Life Insurance',
    //     answer3: 'Individual'
    // };
    let form = '';
    if (answers.answer1 == 'Update beneficiary') {
        form = findUpdateBeneForm(answers.answer2, answers.answer3)
    } else if (answers.answer1 == 'Update Address') {
        form = findChangeAddressForm(answers.answer2, answers.answer3)
    } else if (answers.answer1 == 'Request Loan') {
        form = findTakeLoanForm(answers.answer2, answers.answer3)
    }
    let link = mapFormToLink(form);
    return {name: form, link};

}

function findUpdateBeneForm(answer2, answer3) {
    let form = '';
    if ((answer2 == 'Life Insurance' || answer2 == 'Annuity') && answer3 == 'Individual') {
        form = '21131-M';
    }
    else if ((answer2 == 'Life Insurance' || answer2 == 'Annuity') && answer3 == 'Trust') {
        form = '20885';
    }
    else if (answer2 == 'Mutual Fund') {
        form = 'MS63A'
    }
    return form;
}

function findTakeLoanForm(answer2, answer3) {
    return '21135PL';
}

function findChangeAddressForm(answer2, answer3) {
    let form = '';
    if (answer2 == 'Life Insurance' || answer2 == 'Annuity') {
        form = '21134 SC';
    }
    else if (answer2 == 'Mutual Fund') {
        form = 'MS63F';
    }
    return form;
}

function mapFormToLink(form) {
    let link = '';
    switch (form) {
        case '21131-M':
            link = 'https://www.newyorklife.com/apis/cms/vsc-pdf?pdfName=21131M.pdf';
            break;
        case '20885':
            link = '';
            break;
        case 'MS63A':
            link = '';
            break;
        case '21135PL':
            link = '';
            break;
        default:
            link = 'I\'m Sorry! Something went wrong!'
    }
    return link;
}