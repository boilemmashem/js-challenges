/**
 * Decorates a function so that it console logs how long it takes to run.
 * @example
 *     // import timed
 *     let functionToTime = () => {...does something}
 *     functionToTime = timed(functionToTime)
 *     functionToTime() // use as normal
 * @param func 
 * @returns 
 */
export default (func: Function) => (...args: any): Function => {
    const start: number = performance.now()
    const ret: any = func(...args)
    console.log(
        `function ${func.name} took ${(performance.now() - start).toFixed(3)}ms`
    )
    return ret
}