import { container } from "tsyringe";
import { DayjsDateProvider } from "./DateProvider/DayjsDateProvider";
import { IDayjsDateProvider } from "./DateProvider/IDayjsDateProvider";

container.registerSingleton<IDayjsDateProvider>(
 "DayjsDateProvider",
 DayjsDateProvider
)