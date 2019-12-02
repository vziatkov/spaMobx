export function log() : Function {
    return function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        var originalMethod = descriptor.value;
        console.info(target.constructor);
        descriptor.value = function () {
            //logService.send("call logger for command ");
            console.log("loggg");
            const result = originalMethod.apply(this, arguments);
            return result;
        };
        return descriptor;
    }
}