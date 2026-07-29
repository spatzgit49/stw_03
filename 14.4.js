for(let i=1;i<=5;i++){
    row=""
    for(j=1;j<=i;j++){
        row+="*"
    }
    console.log(row)
}
for(let i=1;i<=5;i++){
    row=""
    spc=""
    for(let j=5;j>i;j--)
        spc+=" "
    for(j=1;j<=(2*i-1);j++)
        row+="*"
    console.log(`${spc}${row}`)
}