*Exercicio 1
a) Round é o número utilizado para criptografar uma senha, quanto maior o número de rounds, mais segura será, entretanto o processo também será mais lento. Salt é uma string aleatória gerada pelo bcrypt baseada no número de rounds. O valor recomendado do round é 12.

b)
const hash = async(s: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt);
    return result;
  }

c)
const compare = async(s: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(s, hash);
  }


*Exercício 2

a) Primeiro deve alterar o endpoint de cadastro, pois já estará salvo no banco de dados a senha criptografada. Depois verifica-se o endpoint de login se a senha passada no body é compatível com a senha guardada no banco de dados. 

b)
app.post("/signup", async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password
    };
  
    const id = generate();

    const hashPassword = await hash(userData.password);

    await createUser(id, userData.email, hashPassword);

    const token = generateToken({
      id
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

c)
app.post("/signup", async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password
    };
  
    const id = generate();

    const hashPassword = await hash(userData.password);

    await createUser(id, userData.email, hashPassword);

    const token = generateToken({
      id
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

*Exercício 3

a)
ALTER TABLE nome_da_tabela ADD COLUMN role VARCHAR(255) DEFAULT "normal" 

b)
import * as jwt from "jsonwebtoken";


  cont expiresIn = "1min";
  const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
      {
        id: input.id,
        role: input.role,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }

 const getData = (token: string): AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      role: payload.role,
    };
    return result;
  }


type AuthenticationData {
  id: string;
  role: string;
}

c)
app.post("/signup", async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };

    const id = generateId();

    const hashPassword = await hash(userData.password);

    await createUser(id, userData.email, hashPassword, userData.role);

    const token = generateToken({
      id,
      role: userData.role,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

d)
app.post("/login", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const user = await getUserByEmail(userData.email);

    const compareResult = await compare(
      userData.password,
      user.password
    );

    if (!compareResult) {
      throw new Error("Invalid password");
    }

    const token = generateToken({
      id: user.id,
      role: user.role,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

*Exercício 4

app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticationData = getData(token);

    if (authenticationData.role !== "normal") {
      throw new Error("Only a normal user can access this funcionality");
    }

    const user = await getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: authenticationData.role,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

*Exercício 5

const deleteUser = async (id: string): Promise<any> => {
    await connection
      .delete()
      .from(UserDatabase.TABLE_NAME)
      .where({ id });
  }

*Exercício 6

app.get("/user", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

	   const tokenData = getData(token);
			// a gente PRECISA verificar se o token não está expirado
	
	    const user = await getUserById(tokenData.id);
	
	    res.status(200).send({
	      id: user.id,
	      email: user.email,
	      role: user.role,
	    });
   } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }

 });