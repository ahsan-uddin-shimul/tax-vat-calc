function onLoadFunc() {
    document.getElementById('con-1').style.display = "none";
    document.getElementById('con-2').style.display = "none";
    document.getElementById('con-3').style.display = "none";

    // off the tables on load
    document.getElementById('table').style.display = "none";
    document.getElementById('table-opt2').style.display = "none";
    document.getElementById('table-opt3').style.display = "none";
    
    // document.getElementById('new-qty').value = 150.50;
    // document.getElementById('new-rate').value = 5800.20;
    // document.getElementById('inv-amount').value = 5512345.214;

    document.getElementById('right-header').innerHTML = "Instruction to the user";
}

// START - enter button enabling
var enterInputVat = document.getElementById('rate-vat');

enterInputVat.addEventListener('keypress', function(event){
    if (event.key === 'Enter'){
        event.preventDefault();
        document.getElementById('button').click();
    }
})

var enterInputTax = document.getElementById('rate-tax');

enterInputTax.addEventListener('keypress', function(event){
    if (event.key === 'Enter'){
        event.preventDefault();
        document.getElementById('button').click();
    }
})

var enterInputInvoice = document.getElementById('inv-amount');

enterInputInvoice.addEventListener('keypress', function(event){
    if (event.key === 'Enter'){
        event.preventDefault();
        document.getElementById('button').click();
    }
})

var enterChkTax = document.getElementById('chk-tax');

enterChkTax.addEventListener('keypress', function(event){
    if (event.key === 'Enter'){
        event.preventDefault();
        document.getElementById('button').click();
    }
})

var enterChkVat = document.getElementById('chk-vat');

enterChkVat.addEventListener('keypress', function(event){
    if (event.key === 'Enter'){
        event.preventDefault();
        document.getElementById('button').click();
    }
})
// END - enter button enabling

// START - reset button enable
function myFunction(){
    location.reload();
}
// END - reset button enable

function funcCalQty(){
    const qtyNew = document.getElementById('new-qty').value;
    const rateNew = document.getElementById('new-rate').value;

    let calculatedInvValue = qtyNew * rateNew;
   
    document.getElementById('inv-amount').value = calculatedInvValue;
}


function funcCalInv(){
    const qtyNew = document.getElementById('new-qty').value;
    const rateNew = document.getElementById('new-rate').value;

    let calculatedInvValue = qtyNew * rateNew;
   
    document.getElementById('inv-amount').value = calculatedInvValue;
}


function funcCalInvClear(){
    document.getElementById('new-qty').value = "";
    document.getElementById('new-rate').value = "";
    document.getElementById('new-unit').value = "";  
}

// submit button start
const btnSubmit = document.querySelector('#form-submit #button');

btnSubmit.addEventListener('click', function(e){

    // prevent default refresh
    e.preventDefault();

    // capture - invoice value, vat rate & tax rate
    const invValue = parseFloat(document.getElementById('inv-amount').value);
    const rateTax = parseFloat(document.getElementById('rate-tax').value);
    const rateVat = parseFloat(document.getElementById('rate-vat').value);

    // capture - check-box of vat & tax
    const chkTax = document.querySelector('#chk-tax');
    const chkVat = document.querySelector('#chk-vat');

if(invValue > 0 && rateTax > 0 && rateVat > 0)
{  
    
            // condition-1: no vat & tax added
            if(!chkTax.checked && !chkVat.checked){

                function thousands_separators(num){
                    var num_parts = num.toString().split(".");
                    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    return num_parts.join(".");
                }

                document.getElementById('right-header').innerHTML = "Details Calculation";
                
                document.getElementById('con-1').style.display = "block";
                document.getElementById('con-2').style.display = "none";
                document.getElementById('con-3').style.display = "none";
                document.getElementById('user-ins').style.display = "none";

                const amntTax = (invValue * (100 / (100 - rateTax))) - invValue;
                document.getElementById('amnt-tax').value = thousands_separators(amntTax.toFixed(2));

                const amntTaxTot = parseFloat(invValue) + parseFloat(amntTax);
                document.getElementById('amnt-tax-one').value = thousands_separators(amntTaxTot.toFixed(2));


                const baseValue = (parseFloat(invValue) + parseFloat(amntTax)).toFixed(2);
                const amntVat = parseFloat((baseValue * (rateVat / 100)).toFixed(2));
                
                document.getElementById('amnt-vat').value = thousands_separators(amntVat);

                // final amount
                const amntFinal = parseFloat(invValue) + parseFloat(amntTax) + parseFloat(amntVat);
                console.log(typeof amntFinal);
                document.getElementById('amnt-final').value = thousands_separators(amntFinal.toFixed(2));

                document.getElementById('text_final').innerText = '(VAT & TAX Included Amount)';

                // right panel - breakdown of calculation
                document.getElementById('invValue').value = thousands_separators(invValue.toFixed(2));
                document.getElementById('ratTax-one').value = rateTax.toFixed(2);
                

                document.getElementById('ratTax-two').value = rateTax.toFixed(2);

                document.getElementById('tax').value = thousands_separators(amntTax.toFixed(2));

                // next line
                document.getElementById('tax_one').value = thousands_separators(amntTaxTot.toFixed(2));
                document.getElementById('inv_amnt_one').value = thousands_separators(invValue.toFixed(2));
                document.getElementById('rat_tax_one').value = thousands_separators(amntTax.toFixed(2));

                // next line
                document.getElementById('vatAmnt_one').value = thousands_separators(amntVat.toFixed(2));
                document.getElementById('baseVal_one').value = thousands_separators(baseValue);
                document.getElementById('rat_rateVat_one').value = rateVat.toFixed(2);

                // next line
                document.getElementById('incl_vattax').value = thousands_separators(amntFinal.toFixed(2));
                document.getElementById('incl_baseVal').value = thousands_separators(baseValue);
                document.getElementById('incl_vatAmnt').value = thousands_separators(amntVat.toFixed(2));

                // table populate
                document.getElementById('table').style.display = "block";
                document.getElementById('table-opt2').style.display = "none";
                document.getElementById('table-opt3').style.display = "none";   

                // first line
                let qtyNew_table = document.getElementById('new-qty').value
                let unitNew_table = document.getElementById('new-unit').value
                let rateNew_table = document.getElementById('new-rate').value
                let amntNew_table = document.getElementById('inv-amount').value
                

                document.getElementById('qty-feed').value = thousands_separators(qtyNew_table);
                document.getElementById('unit-feed').value = unitNew_table;
                document.getElementById('rate-feed').value = thousands_separators(rateNew_table);
                document.getElementById('amnt-feed').value = thousands_separators(parseFloat(amntNew_table).toFixed(2));

                // Tax Amount
                let rateTax_table = document.getElementById('rate-tax').value;
                
                document.getElementById('rateTax-feed').value = parseFloat(rateTax_table);
                document.getElementById('amntTax-feed').value = thousands_separators(amntTax.toFixed(2) );

                // Amount (including tax)
                document.getElementById('amntInclTax-feed').value = thousands_separators(amntTaxTot.toFixed(2));

                // Vat Amount (mushok 6.3)
                let rateVat_table = document.getElementById('rate-vat').value;
                
                document.getElementById('rateVat-feed').value = parseFloat(rateVat_table);
                document.getElementById('amntVat-feed').value = thousands_separators(amntVat.toFixed(2));
   
                // Amount Total
                document.getElementById('amntTot-feed').value = thousands_separators(amntFinal.toFixed(2));
            
            } 
        
            // condition-2: both vat & tax added
            else if(chkTax.checked && chkVat.checked){

                function thousands_separators(num){
                    var num_parts = num.toString().split(".");
                    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    return num_parts.join(".");
                }

                document.getElementById('right-header').innerHTML = "Details Calculation";

                document.getElementById('con-2').style.display = "block";
                document.getElementById('con-1').style.display = "none";
                document.getElementById('con-3').style.display = "none";
                document.getElementById('user-ins').style.display = "none";

                const amntVat = (invValue * rateVat) / (100 + parseFloat(rateVat));
                document.getElementById('amnt-vat').value = thousands_separators(amntVat.toFixed(2));

                const amntTax = (invValue - amntVat) * (parseFloat(rateTax) / 100);
                document.getElementById('amnt-tax').value = thousands_separators(amntTax.toFixed(2));

                const amntTaxTot = parseFloat(invValue) - ((invValue * rateVat) / (100 + parseFloat(rateVat)));
                document.getElementById('amnt-tax-one').value = thousands_separators(amntTaxTot.toFixed(2));


                // final amount
                const amntFinal = parseFloat(invValue) - parseFloat(amntTax) - parseFloat(amntVat);
                document.getElementById('amnt-final').value = thousands_separators(amntFinal.toFixed(2));

                document.getElementById('text_final').innerText = '(Supplier Take-Home Amount)';

    
                // right panel - breakdown of calculation
                document.getElementById('vat_amnt').value = thousands_separators(amntVat.toFixed(2));
                document.getElementById('inv_amnt').value = thousands_separators(invValue.toFixed(2));
                document.getElementById('rat_vat').value = rateVat.toFixed(2);
                document.getElementById('rat_vat-two').value = rateVat.toFixed(2);

                document.getElementById('vat-amnt-three').value = thousands_separators((invValue - amntVat).toFixed(2));
                document.getElementById('inv_amnt-two').value = thousands_separators(invValue.toFixed(2));
                document.getElementById('vat-amnt-two').value = thousands_separators(amntVat.toFixed(2));

                document.getElementById('tax_amnt-five').value = thousands_separators(amntTax.toFixed(2));
                document.getElementById('base_value').value = thousands_separators(amntTaxTot.toFixed(2));
                document.getElementById('rat_tax-three').value = rateTax.toFixed(2);

                document.getElementById('tax_amnt-five_2').value = thousands_separators(amntFinal.toFixed(2));
                document.getElementById('base_value_2').value = thousands_separators(invValue.toFixed(2));
                document.getElementById('rat_tax-three_2').value = thousands_separators(amntVat.toFixed(2));
                document.getElementById('rat_tax-three_3').value = thousands_separators(amntTax.toFixed(2));

                
                // table populate
                document.getElementById('table').style.display = "none";
                document.getElementById('table-opt2').style.display = "block";
                document.getElementById('table-opt3').style.display = "none";
                
                // first line
                let qtyNew_table_opt2 = document.getElementById('new-qty').value
                let unitNew_table_opt2 = document.getElementById('new-unit').value
                let rateNew_table_opt2 = document.getElementById('new-rate').value
                let amntNew_table_opt2 = document.getElementById('inv-amount').value

                document.getElementById('qty-feed-opt2').value = thousands_separators(qtyNew_table_opt2);
                document.getElementById('unit-feed-opt2').value = unitNew_table_opt2;
                document.getElementById('rate-feed-opt2').value = thousands_separators(rateNew_table_opt2);
                document.getElementById('amnt-feed-opt2').value = thousands_separators(parseFloat(amntNew_table_opt2).toFixed(2));

                // Tax Amount
                let rateTax_table_opt2 = document.getElementById('rate-tax').value;

                document.getElementById('rateTax-feed-opt2').value = rateTax_table_opt2;
                document.getElementById('amntTax-feed-opt2').value = thousands_separators(amntTax.toFixed(2));

                // Vat Amount (mushok 6.3)
                let rateVat_table_opt2 = document.getElementById('rate-vat').value;

                document.getElementById('rateVat-feed-opt2').value = parseFloat(rateVat_table_opt2);
                document.getElementById('amntVat-feed-opt2').value = thousands_separators(amntVat.toFixed(2));

                // Total Vat+Tax amount

                // parseFloat(amntTax) + parseFloat(amntVat)
                let totVatTax_table_opt2 = parseFloat(amntTax.toFixed(2)) + parseFloat(amntVat.toFixed(2));
                console.log(totVatTax_table_opt2);
                document.getElementById('totVatTax-feed-opt2').value = thousands_separators(totVatTax_table_opt2.toFixed(2));
                
                // Amount Total (excl vat-tax)
                document.getElementById('amntTot-feed-opt2').value = thousands_separators(amntFinal.toFixed(2));
            
            }
            
            // condition-3: tax added, vat not added
            else if(chkTax.checked && !chkVat.checked){

                function thousands_separators(num){
                    var num_parts = num.toString().split(".");
                    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    return num_parts.join(".");
                }

                document.getElementById('right-header').innerHTML = "Details Calculation";
                
                document.getElementById('con-3').style.display = "block";
                document.getElementById('con-1').style.display = "none";
                document.getElementById('con-2').style.display = "none";
                document.getElementById('user-ins').style.display = "none";

                const amntTax = invValue * (rateTax / 100);
                document.getElementById('amnt-tax').value = thousands_separators(amntTax.toFixed(2));

                const amntTaxTot = parseFloat(invValue);
                document.getElementById('amnt-tax-one').value = thousands_separators(amntTaxTot.toFixed(2));

                const amntVat = invValue * (rateVat / 100);
                console.log(amntVat);
                document.getElementById('amnt-vat').value = thousands_separators(amntVat.toFixed(2));

                // // final amount
                const amntFinal = parseFloat(invValue) + parseFloat(amntVat);
                console.log(typeof amntFinal);
                document.getElementById('amnt-final').value = thousands_separators(amntFinal.toFixed(2));

                document.getElementById('text_final').innerText = '(VAT & TAX Included Amount)';
            
                // right side panel
                document.getElementById('base_val').value = thousands_separators(amntTaxTot.toFixed(2));
                document.getElementById('inv_amnt_final').value = thousands_separators(invValue.toFixed(2));
                

                document.getElementById('tax_amnt_final_one').value = thousands_separators(amntTax.toFixed(2));
                document.getElementById('inv_amnt_final_one').value = thousands_separators(invValue.toFixed(2));
                document.getElementById('rate_tax_final_one').value = rateTax.toFixed(2);

                document.getElementById('vattax_incl_1').value = thousands_separators(amntVat.toFixed(2));
                document.getElementById('inv_amnt_base_1').value = thousands_separators(invValue.toFixed(2));
                document.getElementById('vat_amnt-fin_1').value = rateVat.toFixed(2);


                document.getElementById('vattax_incl').value = thousands_separators(parseFloat(invValue) + parseFloat(amntVat));
                document.getElementById('inv_amnt_base').value = thousands_separators(invValue);
                document.getElementById('vat_amnt-fin').value = thousands_separators(amntVat.toFixed(2));

                // table populate - opt-3
                document.getElementById('table').style.display = "none";
                document.getElementById('table-opt2').style.display = "none";
                document.getElementById('table-opt3').style.display = "block";
                
                // first line
                let qtyNew_table_opt3 = document.getElementById('new-qty').value
                let unitNew_table_opt3 = document.getElementById('new-unit').value
                let rateNew_table_opt3 = document.getElementById('new-rate').value
                let amntNew_table_opt3 = document.getElementById('inv-amount').value

                document.getElementById('qty-feed-opt3').value = thousands_separators(qtyNew_table_opt3);
                document.getElementById('unit-feed-opt3').value = unitNew_table_opt3;
                document.getElementById('rate-feed-opt3').value = thousands_separators(rateNew_table_opt3);
                document.getElementById('amnt-feed-opt3').value = thousands_separators(parseFloat(amntNew_table_opt3).toFixed(2));

                // Tax Amount
                let rateTax_table_opt3 = document.getElementById('rate-tax').value;

                document.getElementById('rateTax-feed-opt3').value = rateTax_table_opt3;
                document.getElementById('amntTax-feed-opt3').value = thousands_separators(amntTax.toFixed(2));

                // Vat Amount (mushok 6.3)
                let rateVat_table_opt3 = document.getElementById('rate-vat').value;

                document.getElementById('rateVat-feed-opt3').value = parseFloat(rateVat_table_opt3);
                document.getElementById('amntVat-feed-opt3').value = thousands_separators(amntVat.toFixed(2));

                
                // Amount Total (incl vat-tax)
                document.getElementById('amntTot-feed-opt3').value = thousands_separators(amntFinal.toFixed(2));            
            } 

            else if(!chkTax.checked && chkVat.checked){
                window.alert('Stop! Vat accept Tax is not acceptable.');
            }
      
}

else {
            window.alert("Wait! seems any of the following parameter missing -\n - Qty, Unit or Rate \n - Invoice Amount (in case you input seperately) \n - Tax rate \n - Vat rate");
    }

})


