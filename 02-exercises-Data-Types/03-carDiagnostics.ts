interface CarBody {
    material: string;
    state: string;
}

interface Tiers {
    airPressure: number;
    condition: string;
}

interface Engine {
    horsepower: number;
    oilDensity: number;
}

interface Diagnostics {
    partName: string;
    runDiagnostics(): string;
}

function monitoringParts(carBody: CarBody & Diagnostics, tiers: Tiers & Diagnostics, engine: Engine & Diagnostics) {
    console.log(carBody.runDiagnostics())
    console.log(tiers.runDiagnostics())
    console.log(engine.runDiagnostics())
}

function runDiagnostics(this: { partName: string }) {
    return this.partName
}

monitoringParts({ material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics },
    { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics },
    { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics }
)