import { IDayjsDateProvider } from "./IDayjsDateProvider";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)

class DayjsDateProvider implements IDayjsDateProvider {
 convertToUtc(date: Date): string {
  return dayjs(date).utc().local().format()
 }
 dateNow(): Date {
  return dayjs().toDate()
 }

}

export { DayjsDateProvider }