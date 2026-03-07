function generateTripOptions(budget) {

    const budgetTrip = {
        travel: Math.round(budget * 0.3),
        stay: Math.round(budget * 0.35),
        food: Math.round(budget * 0.2),
        buffer: Math.round(budget * 0.15)
    };

    const balancedTrip = {
        travel: Math.round(budget * 0.35),
        stay: Math.round(budget * 0.4),
        food: Math.round(budget * 0.2),
        buffer: Math.round(budget * 0.05)
    };

    const comfortTrip = {
        travel: Math.round(budget * 0.45),
        stay: Math.round(budget * 0.4),
        food: Math.round(budget * 0.1),
        buffer: Math.round(budget * 0.05)
    };

    return {
        budgetTrip,
        balancedTrip,
        comfortTrip
    };
}