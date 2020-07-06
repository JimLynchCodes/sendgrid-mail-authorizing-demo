
const main = async() => {

    // replace with your sengrid key
    const sendgridKey = 'SG.-----.--------';
    
    const sgMail = require('@sendgrid/mail');
    
    sgMail.setApiKey(sendgridKey);
    
    const msg = {
        to: 'help@katefromhr.com',
        from: 'jim.lynch@evaluates2.com',
        templateId: 'd-bb90f412b6b1476d90ea3ab3d3d7df56',
        dynamic_template_data: {
            subject: 'Testing Templates',
            name: 'Some One',
            city: 'Denver',
        },
    };
    
    const mailResponse = await sgMail.send(msg)
    
    .catch(err => {
        console.log('err sending: ', err)
    })
    
    console.log('done:\n', mailResponse);
    
}

main().then().catch()