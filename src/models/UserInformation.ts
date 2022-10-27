import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('user_information')
class UserInformation {
    @PrimaryColumn()
    id: string

    @Column({ name: "name", type: "text" })
    name: string

    @Column({ name: "last_name", type: "text" })
    lastName: string

    @Column({ name: "phone_number", type: "text" })
    phoneNumber: string

    @Column({ name: "born_date", type: "date" })
    bornDate: Date

    constructor() {
        if (!this.id) {
          this.id = uuid();
        }
      }
}

export { UserInformation };
