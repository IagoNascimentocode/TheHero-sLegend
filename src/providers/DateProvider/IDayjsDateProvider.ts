interface IDayjsDateProvider {
 convertToUtc(date: Date): string;
 dateNow(): Date;
}

export { IDayjsDateProvider }