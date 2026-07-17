from fastapi import APIRouter, Request, Depends
from app.db.database import get_db
from sqlalchemy.ext.asyncio import AsyncSession
from app.handlers.user import fetchUser
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy import select
from app.models.models import User
from app.utils.jwt import extractUserId

router = APIRouter(prefix="/user", tags=["user"])

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="")

@router.get("/current")
async def get_user(request: Request):
    return request.session.get("user")

@router.get("/profile")
async def fetchUserProfile(db: AsyncSession = Depends(get_db), token: str = Depends(oauth2_scheme)):
    user = await fetchUser(db=db, token=token)
    return user

@router.get("/update_profile")
async def updateUserProfile(bmi: str, db: AsyncSession = Depends(get_db), token: str = Depends(oauth2_scheme)):
    msg = {}
    user = await fetchUser(db = db, token = token)
    print(user, bmi)
    
    raw_user = extractUserId(token=token)
    
    user_id = raw_user["user_id"]

    result = await db.execute(
        select(User).where(User.id == user_id)
    )
    fetched_user = result.scalar_one_or_none()
    
    
    if fetched_user is not None:
        fetched_user.bmi = float(bmi)
        await db.commit()
        await db.refresh(fetched_user)
        if fetched_user is not None:
            return True, "Updated Successfully!", fetched_user
        else:
            return False, "Couldn't access your account, please try again later!", None
    return msg

@router.post("/plan")
async def createPlan(db: AsyncSession = Depends(get_db), token: str = Depends(oauth2_scheme)):
    user = await fetchUser(db=db, token=token)
    return_data = {}
    return return_data