import { ApiResponse, BaseController } from "@/core";
import { User } from "@/db/schema";
import { Controller, Get } from "@nestjs/common";
import { eq, InferSelectModel } from "drizzle-orm";

@Controller()
export class HomeController extends BaseController {
    @Get()
    async index() {
        const id = 1;
        const user = await this.db.query.User.findFirst({ where: eq(User.id, id) });

        if (!user) {
            const ids = await this.db.insert(User).values({
                email: "test@hike.com",
                passHash: '',
                passSalt: '',
            } as InferSelectModel<typeof User>).$returningId();
            console.log(ids);
        }

        return ApiResponse.ok({
            message: "Hello World",
            user
        });
    }
}