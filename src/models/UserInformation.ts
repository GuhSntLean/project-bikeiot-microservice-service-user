import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { CredentialUser } from "./CredentialUser";

@Entity("user_information")
class UserInformation {
  @PrimaryColumn()
  id: string;

  @Column({ name: "first_name", type: "text" })
  firstName: string;

  @Column({ name: "last_name", type: "text" })
  lastName: string;

  @Column({ name: "cell-phone", type: "text" })
  cellPhone: string;

  @Column({ name: "phone", type: "text" })
  phone: string;

  @Column({ name: "born_date", type: "timestamp" })
  dateBorn: Date;

  @OneToOne(() => CredentialUser)
  @JoinColumn({ name: "credential_id" })
  credentialId: CredentialUser;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { UserInformation };
