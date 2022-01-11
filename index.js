document.getElementById('subt').onclick = () => {

    // gets the value of name inp box
    const text = document.getElementById('nam').value;
    // ignores blank input
    block: {
        if (!text.trim().length) {
            document.getElementById('nam').setAttribute('placeholder', 'Type Something');
            break block;
        }
        
    // Create a td for each value
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');

    // Create a tr for the values
    const tr = document.createElement('tr');
    
    // add the values to the td's
    td1.append(document.getElementById('nam').value);
    td2.append(document.getElementById('typ').value);
    td3.append(document.getElementById('dat').value);
    td4.append(document.getElementById('val').value + '$');

    // add tr to the values
    tr.append(td1, td2, td3, td4);

    // append everything to the document
    document.getElementById('bod').append(tr);
    }
}
