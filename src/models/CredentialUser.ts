import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("credential_user")
class CredentialUser {
  @PrimaryColumn()
  id: string;

  @Column({ name: "user_name", type: "text" })
  userName: string;

  @Column({ name: "email", type: "text" })
  email: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { CredentialUser };
