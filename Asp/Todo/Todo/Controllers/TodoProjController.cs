using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using Todo.Models;
namespace Todo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoProjController : ControllerBase
    {
        private IConfiguration _configuration;
        public TodoProjController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        [Route("GetUser")]
        public JsonResult GetUser()
        {
            string query = "SELECT * from dbo.Login";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("todoProjDBCon");
            SqlDataReader myReader;
            using(SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using(SqlCommand myCommand = new SqlCommand(query,myCon)) {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();

                
                }
            }
            return new JsonResult(table);

            
                }
        [HttpPost]
        [Route("AddUser")]
        public JsonResult AddUser([FromBody] Login newUser)
        {
            string query = "INSERT INTO dbo.Login (Email,Password) VALUES(@Email,@Password) ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("todoProjDBCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Email", newUser.Email);
                    myCommand.Parameters.AddWithValue("@Password", newUser.Password);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();


                }
            }
            return new JsonResult("Successed");


        }

    }
    }

