const pythagoreanTriplet = () => {
    // if a^2 + b^2 = c^2, and a < b < c
    // minimums are a=1, b=2, c=5
    //
    // Roughly finding maximum limits
    // assuming a=400, b=401, c = 566.39 => a + b + c > 1000
    // therefor we can set resonable limits for a, b, and c respectively.

    // Loop over c
    //     loop over b
    //         loop over a
    //             check square match
    //                 check sum match

    for(let c = 5; c < 700; c++) {
        for(let b  = 2; b < c; b++) {
            for(let a = 1; a < b; a++) {
                // Do we have a square match?
                if(Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
                    if(a + b + c === 1000) {
                        console.log(`a:${a}, b:${b}, c:${c}`)
                    }
                }
            }
        }
    }
}

pythagoreanTriplet()