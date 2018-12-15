-- If place type already exist the show exception
CREATE OR REPLACE FUNCTION myOwnFunction()
RETURNS trigger AS
$$
begin
	IF EXISTS (SELECT title FROM public."placeTypes" where NEW."title"=title)
	THEN RAISE EXCEPTION 'You already have a place type with this "%" title', NEW."title";
	END IF;

	return new;
end;
$$ language plpgsql;

DROP TRIGGER afterInsertPlaceType ON public."placeTypes";
CREATE TRIGGER afterInsertPlaceType AFTER INSERT ON public."placeTypes"
EXECUTE PROCEDURE myOwnFunction();